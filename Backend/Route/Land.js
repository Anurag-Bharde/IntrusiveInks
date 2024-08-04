const express=require("express");
const { LandingSchema } = require("../../Database/databe");
const land=express();
const moment = require('moment');
land.use(express.json())

land.get("/Intruser",async (req,res)=>{
    try {
        // Fetch all notes sorted by timePost in descending order
        const notes = await LandingSchema.find().sort({ timePost: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
})

land.post("/Intruser",async (req,res)=>{
    try{
        const {INotes}=req.body;
        const timer=new Date();
        const notepad=await LandingSchema.create({
            INote:INotes,
            timePost:timer
        })
    res.status(201).json({MSG:"The Thought has been saved"})
} catch (error) {
    console.error("Error saving thought:", error);
    res.status(500).json({ msg: "Internal server error" });
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

