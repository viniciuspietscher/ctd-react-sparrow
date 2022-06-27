import style from "./TodoListItem.module.css"
import { FaMinusCircle, FaCheckCircle } from "react-icons/fa"

function TodoListItem({ todo, onRemoveTodo, onCompleteTodo }) {
  return (
    <li className={style.ListItem}>
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

export default TodoListItem
