const { Router } = require("express");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createNewThought);
router.put("/:id", updateThoughtById);
router.delete("/:id", deleteThoughtById);
//post / reactions
//del / reaction/:id
router.post("/:id/reaction", createNewReaction);
router.delete("/:thoughtId/reaction/:reactionId", deleteReactionById);

module.exports = router;
