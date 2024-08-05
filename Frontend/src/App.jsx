import { useEffect, useState } from 'react'

import './App.css'
import { Landingpage } from './components/Landingpage';
import { PostBox } from './components/PostBox';

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
    <Landingpage todos={todos} />
    </>
  )
}

export default App
