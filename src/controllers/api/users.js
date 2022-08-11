//getAllUsers
const { User, Thoughts } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[Error]: Failed to get all users | ${error.message}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ success: false });
    }
    return res.json({ data: user });
  } catch (error) {
    console.log(`[Error]: Failed to get user | ${error.message}`);
  }
};

const createNewUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    //if
    if (username && email) {
      await User.create({ username, email });
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        error: `Please enter a valid username and email`,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create a new user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    if (username || email) {
      await User.findByIdAndUpdate(id, {
        username,
        email,
      });
      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(`[ERROR]: Failed to update the user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const userThoughts = user.thoughts;
    console.log(userThoughts);
    await Thoughts.deleteMany({ _id: userThoughts });

    try {
      await User.findByIdAndDelete(id);
      return res.json({ success: true });
    } catch (error) {
      console.log(`[ERROR]: Failed to delete a user | ${error.message}`);
      return res.status(500).json({ success: false, error: error.message });
    }
  } catch (error) {
    console.log(`[Error]: Failed to get a user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
