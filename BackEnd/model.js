const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
     description:{
         type:String
        
     },
     activitytype:{
         type:String
     },
     duration:{
         type:String
     },
     date:{
         type:Date
     }

})

const User =mongoose.model("user",userSchema)
module.exports=User;