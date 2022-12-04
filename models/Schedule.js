const db = require("../config/config");
const { schedules } = require("../db/data.json");
const schedule = db.collection("Schedules");
module.exports = class Schedule {
  static async seedSchedule(req, res, next) {
    try {
      await schedule.insertMany(schedules);
    } catch (error) {
      throw error;
    }
  }

  static async create(body) {
    try {
      const data = await schedule.insertOne(body);
      if (data) return 1;
    } catch (error) {
      throw error;
    }
  }

  static async findAll(body) {
    try {
      const cursor = await schedule.find({ userId: body._id });
      const data = await cursor.toArray();
      return data;
    } catch (error) {
      throw error;
    }
  }
};
