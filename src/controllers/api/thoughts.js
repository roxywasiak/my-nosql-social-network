const { User, Thoughts } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thoughts.find({});
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[Error]: Failed to get all thoughts | ${error.message}`);
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thoughts = await Thoughts.findById(thoughtId);
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thought" });
  }
};

const createNewThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const newThought = await Thoughts.create({ thoughtText, username });
    return res.json({ success: true, data: newThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create Thought" });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const data = req.body;

    const updateThought = await Thoughts.findByIdAndUpdate(thoughtId, data);

    if (!updateThought) {
      return res.json({ success: false, message: "Thought does not exist" });
    }

    return res.json({ success: true, data: updateThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create Thought" });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const deleteThought = await Thoughts.findByIdAndDelete(thoughtId);

    if (!deleteThought) {
      return res.json({ success: false, message: "Thought does not exist" });
    }

    return res.json({ success: true, data: deleteThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create Thought" });
  }
};

const createNewReaction = async (req, res) => {
  try {
    const reaction = req.body;

    const { thoughtId } = req.params;

    const thought = await Thoughts.findByIdAndUpdate(thoughtId, {
      $push: { reactions: reaction },
    });

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};

const deleteReactionById = async (req, res) => {
  try {
  } catch {}
};

//createReactionForThought
//deleteReactionFromThought
module.exports = {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
  createNewReaction,
  deleteReactionById,
};
