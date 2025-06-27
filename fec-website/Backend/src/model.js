import mongoose from "mongoose";

const MsgSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true,
  },

  email:{
    type: String,
    required:true,
  },

  message:{
    type: String,
  }

},{timestamps: true});

export default mongoose.model("Messages", MsgSchema);
