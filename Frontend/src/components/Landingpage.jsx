// import { LandingSchema } from "../../../Database/databe"
import React, { Component, useEffect } from "react";
import {formatDistance} from "date-fns"
import {Dialog} from '@radix-ui/themes'
import { Button,TextField,Flex } from "@radix-ui/themes";
import { useState } from "react";

export function Landingpage({todos,setTodos,setUpdatedNoteId}){

    const [editNote,setEditedNote]=useState("")

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

    // const editedNote=(id) =>{
    //     fetch(`http://localhost:3000/Intruser/${id}`,
    //     {method:"PUT",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify({INote:editNote})
    // })
    // .then(res=>res.json())
    // .then(updatedNote=>{
    //     setTodos(todos.map(note =>
    //         note._id === id ? updatedNote:note
    //     ))
    // })
    // .catch(err=>console.error(err))
    // }

    function Changer(id){

       const message =prompt("Please enter your New Note");
       if(message && message.trim() !== ""){
       setEditedNote(message);
        fetch(`http://localhost:3000/Intrusive/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({INote:message})
        })
        .then(res=>res.json())
        .then(updatedNote=>{
            setUpdatedNoteId(id);
        })
    }

    }

    function Deleter(id){
      fetch(`http://localhost:3000/intrusive/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
      })
      .then(res=>res.json())
      .then(updatedNote=>{
        setUpdatedNoteId(id);
      })
    }
         
    

    // console.log(todos.INote)
    return (
        <div>
      {todos.map(notes => (
        <div key={notes._id}>
          <h2>{notes.INote}</h2>
          <button onClick={() => likenote(notes._id)}>
            Like {notes.postLikes}
          </button>
          <p>{formatDistance(new Date(), notes.timePost)} ago</p>
          <Button onClick={()=>Changer(notes._id)}>Edit</Button>
          <Button onClick={()=>Deleter(notes._id)}>Delete</Button>
        </div>
      ))}
    </div>
    )
}