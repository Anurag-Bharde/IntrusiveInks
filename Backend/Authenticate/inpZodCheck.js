const Zod=require("zod");

const UserInfo=Zod.object({
    username:Zod.string().min(1,"Username is required"),
    email:Zod.string().email("Invalid email address"),
    password:Zod.string().min(6,"Password must be at least 6 characters long")
})

module.exports={
UserInfo
}