import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"
import PropTypes from "prop-types"

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

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoList
