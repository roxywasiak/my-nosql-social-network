const { Router } = require("express");

const { CreateFriendToUser, DeleteFriendFromUser } = require("");

const router = Router({ mergeParams: true });

router.post("/", CreateFriendToUser);
router.delete("/:friendId", DeleteFriendFromUser);

module.exports = router;
