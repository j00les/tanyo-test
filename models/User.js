const db = require("../config/config");
const { users } = require("../db/data.json");
const { passHash } = require("../helpers/bcrypt");
const user = db.collection("Users");

module.exports = class User {
  static async seedUser() {
    try {
      const hashed = users.map(user => {
        return {
          email: user.email,
          password: passHash(user.password),
        };
      });
      await user.insertMany(hashed, { ordered: true });
    } catch (error) {
      throw error;
    }
  }

  static async findOne(payload) {
    try {
      const data = await user.findOne(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async create(payload) {
    try {
      const create = await user.insertOne(payload);
      const data = await user.findOne(create.insertedId);

      return data;
    } catch (error) {
      throw error;
    }
  }
};
