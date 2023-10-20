import { useNavigate } from "react-router-dom"
import { TodoItem } from "./TodoItem"


export function TodoList({ todos, deleteTodo }) {
  const navigate = useNavigate()
  return (
    <ul className="list">
      {todos.length === 0 && "No Links"}
      {todos.map(todo => {
        return (
          <TodoItem {...todo} key={todo._id} deleteTodo={deleteTodo}/>
        )
      })}
      <li className="flexing">
        <button onClick={() => {
          localStorage.removeItem('token')
          navigate('/signin')
        }} className="btn btn-danger">Logout</button>
      </li>
    </ul>
  )
}
