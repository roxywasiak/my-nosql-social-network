const { Schema, model } = require("mongoose");
const { formatTimestamp } = require("../utils");

const reactionSchema = require("./Reactions");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: formatTimestamp,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

module.exports = Thought;
