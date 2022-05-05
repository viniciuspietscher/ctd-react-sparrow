import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  )

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])

  function handleRemoveTodo(id) {
    const newTodoList = todoList.filter((todoItem) => id !== todoItem.id)

    setTodoList(newTodoList)
  }

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
      </header>
      <hr />
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo} />
    </>
  )
}

export default App
