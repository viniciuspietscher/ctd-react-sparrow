const todoList = [
  {
    id: 1,
    title: "Complete assignment 1",
  },
  {
    id: 2,
    title: "Complete assignment 2",
  },
  {
    id: 3,
    title: "Complete assignment 3",
  },
]

const TodoList = () => (
  <ul>
    {todoList.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
)

export default TodoList
