import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"
import PropTypes from "prop-types"
import { FaSort } from "react-icons/fa"

function TodoList({ todoList, onRemoveTodo, onCompleteTodo, sortList }) {
  return (
    <div className={style.ListContainer}>
      <ul className={style.List}>
        {todoList.map((item) => (
          <TodoListItem
            key={item.id}
            todo={item}
            onRemoveTodo={onRemoveTodo}
            onCompleteTodo={onCompleteTodo}
          />
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
