const express=require("express");
const { default: themil } = require("./existin");
const app=express();


app.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
     
    const usExist= await UserAuth.findOne({password:password,email:email});

    if(usExist){
        //navigate to the next screen
    }
    else{
        const usNaExis=await UserAuth.findOne({password:password});
        const usEmExis=await UserAuth.findOne({email:email});

        if(!usNaExis && !usEmExis){
            return res.json({msg:"password and Email not found"})
         }

        else if(!usNaExis){
           return res.json({msg:"password is not correct"})
        }

        else{
            return res.json({msg:"Email is not correct"})
        }
        

    }
    
})


app.post("/signup",(req,res)=>{
    
})