const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const tokenSign = payload => jwt.sign(payload, secretKey);
const tokenVerify = token => jwt.verify(token, secretKey);

module.exports = { tokenSign, tokenVerify };

// app.post('/login', async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const findUser = await User.findOne({ where: { email } });
//     if (!findUser) throw { name: 'Unauthorized' };

//     const isValid = passCompare(password, findUser.password);
//     if (!isValid) throw { name: 'Unauthorized' };

//     const payload = {
//       id: findUser.id,
//       email: findUser.email,
//     };

//     const access_token = tokenSign(payload);

//     res.status(200).json({
//       access_token,
//     });
//   } catch (err) {
//     next(err);
//   }
// });
