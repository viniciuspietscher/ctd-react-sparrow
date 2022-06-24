import style from "./TodoListItem.module.css"
import buttonRemove from "./icons/circle-xmark-solid.svg"
import buttonComplete from "./icons/circle-check-solid.svg"

function TodoListItem({ todo, onRemoveTodo, onCompleteTodo }) {
  return (
    <li className={style.ListItem}>
      {todo.fields.Title}
      <button
        className={style.ButtonRemove}
        onClick={() => onRemoveTodo(todo.id)}
      >
        <img src={buttonRemove} />
      </button>
      <button
        className={style.ButtonComplete}
        onClick={() => onCompleteTodo(todo.id)}
      >
        <img src={buttonComplete} />
      </button>
    </li>
  )
}

export default TodoListItem
