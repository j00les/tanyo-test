const { passHash, passCompare } = require("../helpers/bcrypt");
const { tokenSign } = require("../helpers/jwt");
const User = require("../models/User");

module.exports = class UserController {
  static async seedUser(req, res, next) {
    try {
      await User.seedUser();
      res.status(200).json({
        message: "User seeding succeed",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "Email is required" };
      if (!password) throw { name: "Password is required" };

      const userData = await User.findOne({ email });
      if (userData) throw { name: "Email must be unique!" };

      const hashed = passHash(password);

      const data = await User.create({ email, password: hashed });

      res.status(201).json({
        _id: data._id,
        email: data.email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ email });
      if (!findUser) throw { name: "Unauthorized" };

      const isValid = passCompare(password, findUser.password);
      if (!isValid) throw { name: "Unauthorized" };

      const payload = {
        _id: findUser._id,
        email: findUser.email,
      };
      const access_token = tokenSign(payload);
      console.log(access_token);
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
