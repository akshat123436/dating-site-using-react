const catchAsyncFunction = require("../middlewares/catchAsyncFunction");

module.exports = (user, statusCode, res) => {
  const token = user.getJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // console.log(token);
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
