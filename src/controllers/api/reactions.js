const { Thoughts } = require("../../models");
//make a new reaction to the thought
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
    const { thoughtId, reactionId } = req.params;

    console.log(thoughtId, reactionId);

    const reaction = await Thoughts.findByIdAndUpdate(thoughtId, {
      $pull: { reactions: { _id: reactionId } },
    });

    return res.json({ success: true, data: reaction });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = {
  createNewReaction,
  deleteReactionById,
};
