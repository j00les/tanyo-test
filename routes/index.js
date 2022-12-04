const router = require("express").Router();
const userRouter = require("./user");
const scheduleRouter = require("./schedule");

router.use("/users", userRouter);
router.use("/schedules", scheduleRouter);

module.exports = router;
