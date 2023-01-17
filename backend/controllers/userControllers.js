const catchAsyncFunction = require("../middlewares/catchAsyncFunction");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
module.exports.createUser = catchAsyncFunction(async (req, res) => {
  const newUser = await new User(req.body).save({ validateBforeSave: true });
  res.status(201).json({ success: true, newUser });
});

module.exports.deleteUser = catchAsyncFunction(async (req, res, next) => {
  const deleteUser = await User.findById(req.params.id);
  // console.log(deleteUser);
  if (!deleteUser) {
    return next(
      new ErrorHandler(`User with the id : ${req.params.id} was not found`, 404)
    );
  }
  const deletedUser = await deleteUser.remove();
  res.status(201).json({ success: true, deletedUser });
});

module.exports.editUser = catchAsyncFunction(async (req, res, next) => {
  const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!newUser) {
    return next(new ErrorHandler(`Could not create the user`, 500));
  }
  res.status(201).json({
    success: true,
    newUser,
  });
});

module.exports.showUser = catchAsyncFunction(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User with the id : ${req.params.id} was not found`, 404)
    );
  }
  res.status(201).json({ success: true, user });
});

module.exports.login = catchAsyncFunction(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter email and Password", 400));
  }
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 402));
  }
  sendToken(user, 200, res);
});
