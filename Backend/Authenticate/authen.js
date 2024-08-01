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
    
    try {
        // Find the user by email
        const user = await UserLoginSchema.findOne({ Email: email });
    
        if (!user) {
          return res.status(404).json({ msg: "User not found" });
        }

        const token= jwt.sign(password,JWT_SECRET)
    res.set('Authorization', `Bearer ${token}`)


    } catch(error){
    console.error("Error during signin:", error);
    res.status(500).json({ msg: "Internal server error" });
    }
    
    res.status(200).json({msg:"User is logged in"})
})


app.post("/signup",async (req,res)=>{
    const{username, email, password}=req.body;

    const validINp=zod.UserInfo.safeParse({username,email,password})
    if(!validINp.success){
        const errorMsg=validINp.error.errors.map(error=> error.message);
        return res.status(401).json({msg:"The input provided is not valid",errors: errorMsg});
    }
    const userExist=await UserLoginSchema.findOne({Username:username});
    const EmailExist=await UserLoginSchema.findOne({Email:email});
     
    if(EmailExist){
        return res.status(403).json({MSG:"Email Already Exist"});
    }
    if(userExist){
        return res.status(403).json({MSG:"User Already Exist"});
    }
     else{
        const token= jwt.sign(password,JWT_SECRET)
         res.set('Authorization', `Bearer ${token}`)
        await UserLoginSchema.create({
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