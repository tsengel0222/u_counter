const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./routes/User");
app.use("/api",User);


// Connection from Mongoose to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Admin:admin123@counter.wxua8nf.mongodb.net/test", {
    
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectToDB();

const port = 3003; // Change port to 3003
app.listen(port, () => {
  console.log("Server started");
});