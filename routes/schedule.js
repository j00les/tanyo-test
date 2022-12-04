const ScheduleController = require("../controllers/scheduleController");
const authentication = require("../middlewares/authN");

const router = require("express").Router();

router.post("/seed", ScheduleController.seedSchedule);

router.use(authentication);
router.post("/create", ScheduleController.createSchedule);
router.get("/data", ScheduleController.getUserSchedule);

module.exports = router;
