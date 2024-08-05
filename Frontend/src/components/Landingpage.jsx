

export function Landingpage({todos}){

    // console.log(todos.INote)
    return (
        <div>
            {todos.map(notes=>(
                <div key={notes._id}>
                <h2>{notes.INote}</h2>
                <p> Posted at: {new Date(notes.timePost).toLocaleString()}</p>
                <button onClick={(notes)=>{

                }}></button>
                </div>
            ))}
        </div>
    )
}