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
  } catch (error) {}
};

const createNewThought = async (req, res) => {
  try {
  } catch {}
};

const updateThoughtById = async (req, res) => {
  try {
  } catch {}
};

const deleteThoughtById = async (req, res) => {
  try {
  } catch {}
};

const createNewReaction = async (req, res) => {
  try {
  } catch {}
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
