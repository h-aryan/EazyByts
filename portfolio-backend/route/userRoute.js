const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

router.use(userController.protect); // Protect all routes after this middleware
router.route("/updatePassword").patch(userController.updatePassword);

module.exports = router;
