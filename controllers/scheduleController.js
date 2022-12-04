const Schedule = require("../models/Schedule");

module.exports = class ScheduleController {
  static async seedSchedule(req, res, next) {
    try {
      await Schedule.seedSchedule();
      res.status(200).json({
        message: "Schedule seeding succeed",
      });
    } catch (error) {
      next(error);
    }
  }

  static async createSchedule(req, res, next) {
    try {
      const { from, to, time, repeat, duration, consultType } = req.body;
      const { _id } = req.user;

      await Schedule.create({
        from,
        to,
        time,
        repeat,
        duration,
        consultType,
        userId: _id,
      });

      res.status(201).json({
        message: "Schedule succesfully created",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserSchedule(req, res, next) {
    try {
      const { _id } = req.user;
      const data = await Schedule.findAll({ _id });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
};
