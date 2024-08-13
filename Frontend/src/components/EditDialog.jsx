

function jigar(noteId,Todos){
    console.log(noteId.noteId)
    return (
        <>
        <div style={{height:2000, width:2000, backgroundColor:"black"}}>
         <p>djklsa</p>
        </div>
    </>
    )
}

export function EditDialog(noteId,Todos){
    return <>
        <button onClick={()=>jigar(noteId,Todos)}>Edit</button>
    </>
}