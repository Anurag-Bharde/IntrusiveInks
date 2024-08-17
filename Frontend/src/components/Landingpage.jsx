// import { LandingSchema } from "../../../Database/databe"
import React, { Component } from "react";
import {formatDistance} from "date-fns"
import {Dialog} from '@radix-ui/themes'
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
                <>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button>Edit Profile</Button>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Edit my thought</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            Make changes to your thoughts.
                        </Dialog.Description>

                        <Flex direction="column" gap= "3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Your Thought
                                </Text>
                                <TextField.Root 
                                defaultValue={notes.INote} />
                            </label>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
                </>
                
                </div>
            ))}
        </div>
    )
}