const { Router } = require("express");

const router = require("..");

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

router.get("/", getAllUsers);
router.get("/:Id", getUserById);
router.post("/", createNewUser);
router.put("/:Id", updateUserById);
router.delete("/", deleteUserById);
//put.friends/ :friendsId
//del /friends/:friendId
router.post("/:userId/friends/:friendId", createNewFriend);
router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;
