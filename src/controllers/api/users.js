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
    const user = await User.findById(id);
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
  } catch {}
};

const updateUserById = async (req, res) => {
  try {
  } catch {}
};

const deleteUserById = async (req, res) => {
  try {
  } catch {}
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
