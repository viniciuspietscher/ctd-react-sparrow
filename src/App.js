import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoList from "./Components/TodoList"
import AddTodoForm from "./Components/AddTodoForm"
import { FaClipboardList } from "react-icons/fa"
import style from "./App.module.css"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`
const myInit = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
}

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const addTodo = async (newTodo) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: newTodo.title,
              },
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          setTodoList([...todoList, ...response.records])
        })
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      await fetch(url, myInit)
        .then((result) => result.json())
        .then((result) => {
          setTodoList(result.records)
          setIsLoading(false)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function handleRemoveTodo(id) {
    try {
      fetch(`${url}${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then(function () {
          const newTodoList = todoList.filter((todoItem) => id !== todoItem.id)
          setTodoList(newTodoList)
        })
    } catch (error) {
      console.log(error)
    }
    // const newTodoList = todoList.filter((todoItem) => id !== todoItem.id)

    // setTodoList(newTodoList)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <header className={style.Header}>
                <FaClipboardList size={36} />
                <h1>To-Do List</h1>
              </header>
            </>
          }
        />
        <Route
          path='/new'
          element={
            <>
              <header className={style.Header}>
                <FaClipboardList size={36} />
                <h1>New To-Do Item</h1>
              </header>
              <AddTodoForm onAddTodo={addTodo} />
            </>
          }
        />
      </Routes>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo} />
      )}
    </BrowserRouter>
  )
}

export default App
