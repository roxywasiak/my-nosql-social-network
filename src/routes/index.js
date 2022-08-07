//set up router here
const { Router } = require("express");
const thoughtsRouter = require("./api/thoughts");
const userRouter = require("./api/users");

const router = Router();

router.use("/api/users", userRouter);
router.use("/thoughts", thoughtsRouter);

module.exports = router;
