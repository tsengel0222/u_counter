// const mongoose=require("mongoose");
// const userSchema=new mongoose.Schema({
//     userId:{
//         type:String,
//         required:[true,"userId is required"],
//     },
//     sex:{
//         type:String,
//         required:[true,"sex is required"]
//     },
//     age:{
//         type: Number,
//         required:[true,"age is required"]
//     },
//     number:{
//         type:String,
//         required:[true,"number is required"]
//     }
// });

// module.exports=mongoose.model("User",userSchema);

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User ID is required"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  sex: {
    type: Number,
    required: [true, "sex is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },

  Number: {
    type: String,
    required: [true, "age is required"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
});
module.exports = mongoose.model("User", userSchema);
