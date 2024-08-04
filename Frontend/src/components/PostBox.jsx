const { useState } = require("react")


export function PostBox({setTodos,todos}){
    
    const [noters,setNoters]=useState("");
    const addTodo = ()=>{
        fetch("http://localhost:3000/Intruser",{
            method:"POST",
            body:JSON.stringify({noters}),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(newNote =>{
            setNoters([...todos, newNote])
            setNoters("");
            alert("TODO added");
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