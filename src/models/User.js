const { Schema, model } = require("mongoose");
const { validateEmail } = require("../utils");

const userSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    required: true,
    auto: true,
    trimmed: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
      required: false,
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
};

const schema = new Schema(userSchema);

//virtual
schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

module.exports = User;
