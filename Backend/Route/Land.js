const express=require("express");
const { LandingSchema } = require("../../Database/databe");
const land=express();
const moment = require('moment');

land.get("/Intruser",(req,res)=>{

})

land.post("/Intruser",async (req,res)=>{
    const INotes=req.body.noted;
    const timer=new Date();
    const notepad=await LandingSchema.create({
        INote:INotes,
        timePost:timer,
    })
    
})




// {
// const a="2024-08-01T13:12:10.165Z"
// const ti1=new Date();


//     const timeer=new Date();
// console.log (timeer)
// const tr=moment(ti1).fromNow(timeer)
// console.log(tr + " ago")

// }