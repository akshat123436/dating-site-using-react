const express = require("express");
const router = express.Router({ mergeParams: true });
const userControllers = require("../controllers/userControllers");
const authenticateUser = require("../middlewares/authenticateUser");
router.route("/").post(userControllers.createUser);

router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);

router
  .route("/interestedIn")
  .post(authenticateUser, userControllers.insertInterestedIn)
  .get(authenticateUser, userControllers.getInterestedIn)
  .delete(authenticateUser, userControllers.removeInterestedIn);

router
  .route("/interestOf")
  .get(authenticateUser, userControllers.getInterestOf);
router.route("/matches").get(authenticateUser, userControllers.matches);
router.route("/users").get(authenticateUser, userControllers.getUsers);

router
  .route("/:id")
  .put(userControllers.editUser)
  .delete(authenticateUser, userControllers.deleteUser)
  .get(authenticateUser, userControllers.showUser);

module.exports = router;
