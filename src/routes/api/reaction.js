const { Router } = require("express");

const { CreateReactionToThought, DeleteReactionFromThought } = require("");

const router = Router({ mergeParams: true });

router.post("/", CreateReactionToThought);
router.delete("/:reactionId", DeleteReactionFromThought);

module.exports = router;
