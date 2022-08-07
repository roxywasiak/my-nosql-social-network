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

    await Thoughts.deleteMany({});
    await Thoughts.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const usersFromDb = await User.find({});
    const thoughtsFromDb = await Thoughts.find({});
    //seed thoughts with the users
    const thoughtPromises = thoughtsFromDb.map(async (thought) => {
      const username = thought.username;

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());
      await User.findByIdAndUpdate(user._id, { ...user });
    });
    await Promise.all(thoughtPromises);
    console.log("[INFO]: Successfully seeded thoughts");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }
  //exit
  process.exit(0);
};
//call init
init();
