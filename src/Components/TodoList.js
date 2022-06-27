import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className={style.ListContainer}>
      <ul className={style.List}>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
