const { User } = require("../../models");

const createNewFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    console.log(friendId, userId);

    const newFriend = await User.findByIdAndUpdate(userId, {
      $push: { friends: friendId },
    });

    return res.json({ success: true, data: newFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to add friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add friend" });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const removeFriend = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    return res.json({ success: true, data: removeFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete friend" });
  }
};

module.exports = {
  createNewFriend,
  deleteFriend,
};
