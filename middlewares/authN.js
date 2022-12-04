const { tokenVerify } = require("../helpers/jwt");
const User = require("../models/User");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = tokenVerify(access_token);

    const findUser = await User.findOne({ _id: payload._id });

    if (!findUser) throw { name: "Unauthorized" };

    req.user = {
      _id: findUser._id,
      email: findUser.email,
    };

    next();
  } catch (error) {
    console.log(error, "nyah");
  }
}

module.exports = authentication;
