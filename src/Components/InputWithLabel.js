import { useRef, useEffect } from "react"
import style from "./InputWithLabel.module.css"
import PropTypes from "prop-types"

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
        className={style.Input}
        ref={inputRef}
        type={type}
        id={id}
        value={todoTitle}
        autoComplete='off'
        onChange={handleTitleChange}
      />
    </>
  )
}

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  todoTitle: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleTitleChange: PropTypes.func.isRequired,
  children: PropTypes.string,
  isFocused: PropTypes.bool.isRequired,
}

export default InputWithLabel
