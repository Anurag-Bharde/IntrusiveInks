// import { LandingSchema } from "../../../Database/databe"
import React from "react";
import {formatDistance} from "date-fns"
import { EditDialog } from "./EditDialog";
import FormDialog from "./FormDialog";
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
                <button onClick={()=>{ likenote(notes._id)
                }}>Like {notes.postLikes}</button>
                <p>{formatDistance(new Date(),notes.timePost)} ago</p>
                <FormDialog />
                </div>
            ))}
        </div>
    )
}