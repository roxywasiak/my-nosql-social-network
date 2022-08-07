const mongoose = require("mongoose");
require("dotenv").config();

//import models
const { User, Thoughts } = require("../models");
const users = require("./users.json");
const thoughts = require("./thoughts.json");
//init function
//connect to db
const init = async () => {
    try {
      const DB_NAME = process.env.DB_NAME;
      const MONGODB_URI =
        process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;
  
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
  
      await mongoose.connect(MONGODB_URI, options);
  
      console.log("[INFO]: Connected to DB successful");

//delete
//insert
//users/ thoughts
await User.deleteMany({});
await User.insertMany(users);

console.log("[INFO]: Successfully seeded users");

await Thought.deleteMany({});
await Thought.insertMany(thoughts);

console.log("[INFO]: Successfully seeded thoughts");


//seed thoughts with the users

//exit



//call init
init();