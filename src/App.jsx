import TodoApp from "./TodoApp"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import axios from "axios"
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

  const token = localStorage.getItem('token')
  axios.defaults.baseURL = 'http://localhost:5000/'
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

  return (
    <>
      <MemoryRouter basename="/">
        <Routes>
          <Route path="/" element={<TodoApp/>} /> 
          <Route path="/signin" element={<SignIn/>} /> 
          <Route path="/signup" element={<SignUp/>} /> 
        </Routes>
      </MemoryRouter>
    </>
  )
}
