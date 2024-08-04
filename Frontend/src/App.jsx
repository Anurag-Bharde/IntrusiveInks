import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/Intruser")
    .then(res=>res.json())
    .then(data => setTodos(data))
    .catch(err => console.error(err));
  },[])

  return (
    <>
    <PostBox setTodos={setTodos} todos={todos}/>
    </>
  )
}

export default App
