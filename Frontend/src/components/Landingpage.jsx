// import { LandingSchema } from "../../../Database/databe"
import React from "react";
export function Landingpage({todos,setTodos,setUpdatedNoteId}){

    const likenote=(id)=>{
        
     fetch(`http://localhost:3000/like/${id}`,{
         method:"PUT",
     })
     .then(res =>res.json())
     .then(updateNote=>{
        setTodos(todos.map(note=>
            note._id === id ? { ...note,postLikes:updateNote.postLikes} :note
        ))
     })
     .catch(err=> console.log(err))
    }

    // console.log(todos.INote)
    return (
        <div>
            {todos.map(notes=>(
                <div key={notes._id}>
                <h2>{notes.INote}</h2>
                <p> Posted at: {new Date(notes.timePost).toLocaleString()}</p>
                <button onClick={()=>{ likenote(notes._id)
                }}>Like {notes.postLikes}</button>
                </div>
            ))}
        </div>
    )
}