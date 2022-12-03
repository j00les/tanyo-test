const router = require("express").Router();
// const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/seed", UserController.seedUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
