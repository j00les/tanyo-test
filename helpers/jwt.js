const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const tokenSign = payload => jwt.sign(payload, secretKey);
const tokenVerify = token => jwt.verify(token, secretKey);

module.exports = { tokenSign, tokenVerify };

// app.post('/register', async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const response = await User.create({
//       email,
//       password,
//     });

//     res.status(201).json({
//       id: response.id,
//       email: response.email,
//     });
//   } catch (err) {
//     next(err);
//   }
// });
