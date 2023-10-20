import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function TodoApp() {

  const [todos, setTodos] = useState([])

  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  axios.defaults.baseURL = 'http://localhost:5000/'
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

  useEffect(() => {
    axios.get('api/urls/')
    .then((response) => {
      setTodos(response.data)
    })
    .catch(err => {
      navigate('/signin')
    })
  }, [])

  function addTodo({title, url}) {
    axios.post('api/urls/', {
      title, url
    })
    .then(response => {
      setTodos(currentTodos => {
        return [...currentTodos, response.data]
      })
    })
  }

  function deleteTodo(id) {
    axios.delete('api/urls/'+id)
    .then(response => {
    })
    .catch(err => {
      alert(err)
    })
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo._id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <br />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}
