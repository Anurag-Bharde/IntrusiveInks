

async function themil(req,res,next){
    const email=req.body.email;
    const username=req.body.username;
     
    const usExist= await UserAuth.findOne({username:username,email:email});

    if(!usExist){
        next();
    }
    else{
        const usNaExis=await UserAuth.findOne({username:username});
        if(usNaExis){
            res.json({msg:"Username already exist"})
        }


        const usEmExis=await UserAuth.findOne({email:email});
        if(usEmExis){
            res.json({msg:"Email already exist"})
        }

    }


}

export default themil;