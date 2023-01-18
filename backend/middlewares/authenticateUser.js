const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsyncFunction = require("./catchAsyncFunction");
module.exports = catchAsyncFunction(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to Access", 401));
  }
  const userData = jwt.verify(token, process.env.JWTSECRET);
  // console.log(userData);
  const user = await User.findById(userData.id);
  req.user = user;
  next();
});
