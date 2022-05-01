import { useRef, useEffect } from "react"

function InputWithLabel({
  id,
  todoTitle,
  type = "text",
  handleTitleChange,
  children,
  isFocused,
}) {
  const inputRef = useRef()
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <>
      <label htmlFor={todoTitle}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  )
}

export default InputWithLabel
