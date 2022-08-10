const { Router } = require("express");

const userRouter = Router();

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

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createNewUser);
userRouter.put("/:id", updateUserById);

userRouter.delete("/:id", deleteUserById);
//put.friends/ :friendsId
//del /friends/:friendId
//will be sub-document in schema
userRouter.post("/:userId/friends/:friendId", createNewFriend);
userRouter.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = userRouter;

//user has a friend
//thought has a reaction
