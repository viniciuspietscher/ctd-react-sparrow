import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoList from "./Components/TodoList"
import AddTodoForm from "./Components/AddTodoForm"
import Header from "./Components/Header"
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
  const [sortOrder, setSortOrder] = useState("asc")

  const addTodo = (newTodo) => {
    if (newTodo.title.trim()) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: newTodo.title.trim(),
                Completed: "no",
              },
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          setTodoList([...todoList, ...response.records])
        })
        .catch((e) => console.log(e))
    } else {
      console.log(`no item to add`)
    }
  }

  const fetchData = () => {
    setIsLoading(true)
    fetch(url, myInit)
      .then((result) => result.json())
      .then((result) => {
        setTodoList(result.records)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }

  const sortData = () => {
    const sortUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort%5B0%5D%5Bfield%5D=Title&sort%5B0%5D%5Bdirection%5D=${sortOrder}`
    setIsLoading(true)
    fetch(sortUrl, myInit)
      .then((result) => result.json())
      .then((result) => {
        setTodoList(result.records)
        setIsLoading(false)
        if (sortOrder === "asc") {
          setSortOrder("desc")
        } else {
          setSortOrder("asc")
        }
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRemoveTodo = (id) => {
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
      .catch((e) => console.log(e))
  }

  const handleCompleteTodo = (id) => {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        records: [
          {
            id: id,
            fields: {
              Completed: "yes",
            },
          },
        ],
      }),
    })
      .then(() => fetchData())
      .catch((e) => console.log(e))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route
          path='/new'
          element={
            <>
              <Header />
              <AddTodoForm onAddTodo={addTodo} />
            </>
          }
        />
      </Routes>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          sortList={sortData}
          onRemoveTodo={handleRemoveTodo}
          onCompleteTodo={handleCompleteTodo}
        />
      )}
    </BrowserRouter>
  )
}

export default App
