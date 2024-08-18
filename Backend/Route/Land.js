const express=require("express");
const { LandingSchema } = require("../../Database/databe");
const land=express();
var mongoose = require('mongoose');
const moment = require('moment');
land.use(express.json())
const cors=require('cors')

land.use(cors());

land.get("/Intruser",async (req,res)=>{
    try {
        // Fetch all notes sorted by timePost in descending order

        const notes = await LandingSchema.find().sort({ timePost: -1 });+
        
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
})

land.post("/Intruser",async (req,res)=>{
    try{
        const {noters}=req.body;
        if({noters}=="" || {noters}==null || {noters}==undefined){
            return res.status(500).json({msg:"no msg was sent"})
        }
        // console.log(noters)
        const timer=new Date();
        const notepad=await LandingSchema.create({
            INote:noters,
            timePost:timer
        })
    res.status(201).json(notepad)
} catch (error) {
    console.error("Error saving thought:", error);
    res.status(500).json({ msg: "Internal server error" });
}
})

land.get("/Intruser/:id",async(req,res)=>{
    const idd=req.params.id;
    const note =await LandingSchema.findById(idd);
    res.json(note);
})
land.put("/Intrusive/:id",async(req,res)=>{

  try{const idm=req.params.id;
    if(!idm||idm=="undefined"){
        return res.status(401).json({msg:"Invalid ID"});
    }
 const note=await LandingSchema.findById(idm);
 if(!note){
     return res.status(404).json({msg:"Note note found"})
    }
    note.INote=req.body.INote
    await note.save();
    res.status(200).json({Msg:"The note updated successfully"})
}
catch(error){
    console.log(error)

return res.status(404).json({msg:"Some error occured while editing the Note"})
}

})

land.put("/like/:id",async(req,res)=>{
    try{
    const ider=req.params.id;
    if (!ider || ider === "undefined") {
        return res.status(400).json({ msg: "Invalid ID it is" });
    }


    const note=await LandingSchema.findById(ider);
    if(!note){
        return res.status(404).json({msg:"Note not Found"})
    }
    note.postLikes += 1;
    await note.save();
    res.status(200).json(note);
}catch(error){
    console.log(error)
    return res.status(500).json({msg:"Internal server error"})
}
})


land.delete("/Intrusive/:id",async(req,res)=>{
    try{
        const idm=req.params.id;
        if(!idm || idm==="undefined")return res.status(400).json({ msg: "Invalid ID it is" });
        
        const dated=await LandingSchema.findById(idm)
        const note=await LandingSchema.deleteOne(dated);
       
        res.status(200).json(note)
    }
    catch(error){
   console.log(error);
   res.status(404).json({msg:"Some error while deleting"})
    }
})

land.listen(3000,()=>{
    console.log("The app is running on the port 3000")
})

// {
// const a="2024-08-01T13:12:10.165Z"
// const ti1=new Date();


//     const timeer=new Date();
// console.log (timeer)
// const tr=moment(ti1).fromNow(timeer)
// console.log(tr + " ago")

// }

