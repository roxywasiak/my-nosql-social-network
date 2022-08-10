const { Router } = require("express");

const thoughtsRouter = Router();

const {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/api/thoughts");

const {
  createNewReaction,
  deleteReactionById,
} = require("../../controllers/api/reactions");

thoughtsRouter.get("/", getAllThoughts);
thoughtsRouter.get("/:id", getThoughtById);
thoughtsRouter.post("/", createNewThought);
thoughtsRouter.put("/:id", updateThoughtById);
thoughtsRouter.delete("/:thoughtId", deleteThoughtById);
//post / reactions
//del / reaction/:id
thoughtsRouter.post("/:thoughtId/reaction", createNewReaction);
thoughtsRouter.delete("/:thoughtId/reaction/:reactionId", deleteReactionById);

module.exports = thoughtsRouter;
