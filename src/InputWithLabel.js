import { useRef, useEffect } from "react"

function InputWithLabel({
  todoTitle,
  type = "text",
  handleTitleChange,
  children,
}) {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <label htmlFor={todoTitle}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        id={todoTitle}
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  )
}

export default InputWithLabel
