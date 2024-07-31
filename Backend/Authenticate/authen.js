const express=require("express");
const { default: themil } = require("./existin");
const jwt= require("jsonwebtoken");
const app=express();
const JWT_SECRET= "TumseMileDilMeUthaDardKarara"
const zod=require("./inpZodCheck")
const {UserLoginSchema} = require("../../Database/databe");
const { error } = require("console");

app.use(express.json())
app.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
    
     
    const usExist= await UserAuth.findOne({email:email});

    if(usExist){ 
        //navigate to the next screen
        const token=jwt.sign({userId:userInfo._id}, JWT_SECRET)
        res.set('Authorization', `Bearer ${token}`);
        return res.json({msg:"sign-in successful", token})
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
    const{username, email, password}=req.body;

    const validINp=zod.UserInfo.safeParse({username,email,password})
    if(!validINp.success){
        const errorMsg=validINp.error.errors.map(error=> error.message);
        return res.status(401).json({msg:"The input provided is not valid",errors: errorMsg});
    }
    else{
        UserLoginSchema.create({
        Username:username,
        Password:password,
        Email:email
      })
    }
    res.json({msg:"User is created"})  
})

app.listen(3000,()=>{
    console.log("The app is runing on the port 3000")
})