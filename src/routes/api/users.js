const { Router } = require("express");

const router = require("..");

router.get("/", getAllUsers);
router.get("/:Id", getUserById);
router.post("/", createNewUser);
router.put("/:Id", UpdateUserById);
router.delete("/", deleteUserById);
//put.friends/ :friendsId
//del /friends/:friendId
router.post("/:userId/friends/:friendId", createNewFriend);
router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;
