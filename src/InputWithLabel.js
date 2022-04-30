function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  return (
    <>
      <label htmlFor='todoTitle'>{children}</label>
      <input
        type='text'
        id='todoTitle'
        name='title'
        autoFocus
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  )
}

export default InputWithLabel
