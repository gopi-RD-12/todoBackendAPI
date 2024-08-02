const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
  user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
  },
      description:{
        type:String,
        required:true
      },
      status:{
        type:Boolean,
        default:false
      }
});

const Todos= mongoose.model("Todo",todoSchema)

module.exports=Todos

