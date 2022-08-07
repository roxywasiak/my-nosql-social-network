const { Router } = require("express");

const router = require("..");

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

const {
  createNewFriend,
  deleteFriend,
} = require("../../controllers/api/friends");

router.get("/", getAllUsers);
router.get("/:Id", getUserById);
router.post("/", createNewUser);
router.put("/:Id", updateUserById);

router.delete("/", deleteUserById);
//put.friends/ :friendsId
//del /friends/:friendId
//will be sub-document in schema
router.post("/:userId/friends/:friendId", createNewFriend);
router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;

//user has a friend
//thought has a reaction
