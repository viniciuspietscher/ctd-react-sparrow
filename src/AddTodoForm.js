import { useState } from "react"
import InputWithLabel from "./InputWithLabel"
import style from "./AddTodoForm.module.css"
import addButton from "./icons/circle-plus-solid.svg"

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("")

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    onAddTodo({
      id: Date.now(),
      title: todoTitle,
    })
    setTodoTitle("")
  }

  return (
    <form className={style.AddTodo} onSubmit={handleAddTodo}>
      <InputWithLabel
        id='todoTitle'
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        isFocused
      ></InputWithLabel>
      <button className={style.ButtonAdd} type='submit'>
        <img src={addButton} />
      </button>
    </form>
  )
}

export default AddTodoForm
