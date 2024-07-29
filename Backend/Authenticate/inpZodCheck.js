const Zod=require("zod");

const UserInfo=Zod.object({
    username:Zod.string(),
    email:Zod.string().email(),
    password:Zod.string()
})

module.exports={
UserInfo
}