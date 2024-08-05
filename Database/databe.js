const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://anuragadmin:KIkBqYjyBQZXxJ33@cluster0.3sk1xst.mongodb.net/IntrusiveInk")

const LoginSchema=new mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
})

const Thouts=new mongoose.Schema({
    INote:String,
    timePost:Date,
    postLikes:{type:Number, default:0}
})
const UserLoginSchema=mongoose.model('UserLogin',LoginSchema)
const LandingSchema=mongoose.model('LandinPage',Thouts)

module.exports={
    UserLoginSchema,
    LandingSchema
}