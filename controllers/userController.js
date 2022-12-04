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
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "Empty Field Email" };
      if (!password) throw { name: "Empty Field Passsword" };

      const userData = await User.findOne({ email });
      if (userData) throw { name: "Unique Constraint" };

      const hashed = passHash(password);

      await User.create({ email, password: hashed });

      res.status(201).json({
        message: "Register success",
      });
    } catch (error) {
      next(error);
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

      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }
};
