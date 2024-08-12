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
  
  useEffect(() => {
    if (updatedNoteId) {
      fetch(`http://localhost:3000/Intruser/${updatedNoteId}`)
        .then(res => res.json())
        .then(updatedNote => {
          // Find the index of the note that was updated
          const index = todos.findIndex(note => note._id === updatedNoteId);
  
          if (index !== -1) {
            // Create a new array with the updated note
            const updatedTodos = [
              ...todos.slice(0, index), 
              updatedNote, 
              ...todos.slice(index + 1)
            ];
            setTodos(updatedTodos); // Update the state with the new array
          }
          setUpdatedNoteId(null); // Reset the updatedNoteId after updating
        })
        .catch(err => console.error(err));
    }
  }, [updatedNoteId]); // Only trigger when updatedNoteId changes
  

  
  return (
    <>
    <PostBox setTodos={setTodos} todos={todos}/>
    <Landingpage todos={todos} setTodos={setTodos} setUpdatedNoteId={setUpdatedNoteId} />
    </>
  )
}

export default App
