import { useState } from "react"
import InputWithLabel from "./InputWithLabel"
import style from "./AddTodoForm.module.css"
import { FaPlusCircle, FaSort } from "react-icons/fa"
import PropTypes from "prop-types"

function AddTodoForm({ onAddTodo, sortList }) {
  const [todoTitle, setTodoTitle] = useState("")

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    onAddTodo({
      title: todoTitle,
    })
    setTodoTitle("")
  }

  return (
    <>
      <div className={style.AddTodo}>
        <form onSubmit={handleAddTodo}>
          <InputWithLabel
            id='todoTitle'
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
            isFocused
          ></InputWithLabel>
          <button className={style.ButtonAdd} type='submit'>
            <FaPlusCircle size={22} />
          </button>
        </form>
        <button className={style.ButtonSort} onClick={sortList}>
          <FaSort size={22} />
        </button>
      </div>
    </>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default AddTodoForm
