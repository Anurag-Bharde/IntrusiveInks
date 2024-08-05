import {atom} from "recoil"


export const Likers = atom({
    key:"LikesHai",
    default:async()=>{
        const res=await axios.get("")
    }
})