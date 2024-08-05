import {useState} from 'react'


export function PostBox({setTodos,todos}){
    
    const [noters,setNoters]=useState("");

    const addTodo = ()=>{
      fetch("http://localhost:3000/Intruser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({noters})
        })
        
        .then(res => res.json())
        .then(newNote =>{
            setTodos([newNote, ...todos])
            // console.log(newNote)
            setNoters("");

            // alert("TODO added");
        })
        .catch(err=> console.error(err))
    }
    return (<div>
        <input type="text" placeholder="Add your Idea" value={noters} onChange={(e)=>{
            setNoters(e.target.value)
           
        }}></input>

        <button onClick={addTodo}>Post</button>
    </div>)
}