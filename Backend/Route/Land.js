const express=require("express");
const { LandingSchema } = require("../../Database/databe");
const land=express();
const moment = require('moment');
land.use(express.json())

land.get("/Intruser",(req,res)=>{

})

land.post("/Intruser",async (req,res)=>{
    console.log(1)
    const {INotes}=req.body;
    const timer=new Date();
    const notepad=await LandingSchema.create({
        INote:INotes,
        timePost:timer
    })
    console.log(2)
    res.status(403).json({MSG:"The Thought has been saved"})
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