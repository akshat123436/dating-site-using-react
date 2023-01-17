const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.route("/create").post(userControllers.createUser);

module.exports = router;
