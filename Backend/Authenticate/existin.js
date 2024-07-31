

// async function themil(req,res,next){
//     const email=req.body.email;
//     const username=req.body.username;
     
//     const usExist= await UserAuth.findOne({username:username,email:email});

//     if(!usExist){
//         // next();
//     }
//     else{
//         const usNaExis=await UserAuth.findOne({username:username});
//         const usEmExis=await UserAuth.findOne({email:email});

//         if(usNaExis){
//            return res.json({msg:"Username already exist"})
//         }

//         else if(usEmExis){
//             return res.json({msg:"Email already exist"})
//         }
//         else{
//            return res.json({msg:"Username and Email already exists"})
//         }

//     }


// }

// export default themil;