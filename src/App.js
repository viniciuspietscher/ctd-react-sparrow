import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

const App = () => (
  <div>
    <header style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
    </header>
    <hr />
    <AddTodoForm />
    <TodoList />
  </div>
)

export default App
