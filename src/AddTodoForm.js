import React from "react"

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("")

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    props.onAddTodo({
      id: Date.now(),
      title: todoTitle,
    })
    setTodoTitle("")
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor='todoTitle'>Title: </label>
      <input
        type='text'
        id='todoTitle'
        name='title'
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodoForm
