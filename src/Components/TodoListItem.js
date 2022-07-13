import style from "./TodoListItem.module.css"
import { FaMinusCircle, FaCheckCircle } from "react-icons/fa"
import PropTypes from "prop-types"

function TodoListItem({ todo, onRemoveTodo, onCompleteTodo }) {
  let appliedStyle = style.ListItem
  if (todo.fields.Completed === "yes") {
    appliedStyle = style.ListItemDone
  }
  return (
    <li className={appliedStyle}>
      {todo.fields.Title}
      <button
        className={style.ButtonRemove}
        onClick={() => onRemoveTodo(todo.id)}
      >
        <FaMinusCircle size={22} />
      </button>
      <button
        className={style.ButtonComplete}
        onClick={() => onCompleteTodo(todo.id)}
      >
        <FaCheckCircle size={22} />
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
}

export default TodoListItem
