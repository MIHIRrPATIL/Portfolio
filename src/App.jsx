import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Routes>
    <Route path = "/" element = {<Home/>}></Route>
   </Routes>
   </div>
  )
}

export default App
