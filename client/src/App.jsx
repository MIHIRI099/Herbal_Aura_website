import './App.css'
import {Route,Routes} from "react-router-dom"
import Index from "./pages/Index"
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:9000";

function App() {
  return (
      <Routes>
        <Route path='/' element ={<Layout/>}>
        <Route index element={<Index/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        </Route>
     </Routes> 
     )
    }
export default App
