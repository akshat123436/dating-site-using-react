const express = require("express");
const router = express.Router({ mergeParams: true });
const userControllers = require("../controllers/userControllers");
const authenticateUser = require("../middlewares/authenticateUser");
router.route("/").post(userControllers.createUser);

router
  .route("/:id")
  .put(userControllers.editUser)
  .delete(authenticateUser, userControllers.deleteUser)
  .get(userControllers.showUser);

router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);

router
  .route("/interestedIn")
  .post(authenticateUser, userControllers.insertInterestedIn);
module.exports = router;
