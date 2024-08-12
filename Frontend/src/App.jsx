import { useEffect, useState } from 'react'

import './App.css'
import { Landingpage } from './components/Landingpage';
import { PostBox } from './components/PostBox';

function App() {
  const [todos,setTodos]=useState([]);
  const[updatedNoteId,setUpdatedNoteId]=useState(null);

  useEffect(()=>{
    fetch("http://localhost:3000/Intruser")
    .then(res=>res.json())
    .then(data => setTodos(data))
    .catch(err => console.error(err));
  },[])
  
  useEffect(()=>{
    if(updatedNoteId){
      fetch(`http://localhost:3000/Intruser/${updatedNoteId}`)
      .then(res=>res.json())
      .then(updatedNote =>{
        const updatedTodos=todos.map(note=>
          note._id === updatedNoteId ? updatedNote: note
        )
      setTodos(updatedTodos);
      setUpdatedNoteId(null);
      })
      .catch(err => console.log(err))
    }
  },[updatedNoteId])

  
  return (
    <>
    <PostBox setTodos={setTodos} todos={todos}/>
    <Landingpage todos={todos} setTodos={setTodos} setUpdatedNoteId={setUpdatedNoteId} />
    </>
  )
}

export default App
