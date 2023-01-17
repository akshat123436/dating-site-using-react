const express = require("express");
const router = express.Router({ mergeParams: true });
const userControllers = require("../controllers/userControllers");

router.route("/").post(userControllers.createUser);

router
  .route("/:id")
  .put(userControllers.editUser)
  .delete(userControllers.deleteUser)
  .get(userControllers.showUser);

router.post("/login", userControllers.login);

module.exports = router;
