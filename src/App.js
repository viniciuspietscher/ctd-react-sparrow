import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`
const myInit = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
}

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url, myInit)
      .then((result) => result.json())
      .then((result) => {
        setTodoList(result.records)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function handleRemoveTodo(id) {
    const newTodoList = todoList.filter((todoItem) => id !== todoItem.id)

    setTodoList(newTodoList)
  }

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <header style={{ textAlign: "center" }}>
                <h1>Todo List</h1>
              </header>
              <hr />
            </>
          }
        />
        <Route
          path='/new'
          element={
            <>
              <header style={{ textAlign: "center" }}>
                <h1>New Todo List</h1>
              </header>
              <hr />
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
