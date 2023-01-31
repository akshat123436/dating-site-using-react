const { default: mongoose } = require("mongoose");
const catchAsyncFunction = require("../middlewares/catchAsyncFunction");
const User = require("../models/userModel");
const ApiFeature = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
module.exports.createUser = catchAsyncFunction(async (req, res) => {
  const newUser = await new User(req.body).save({ validateBforeSave: true });
  sendToken(newUser, 200, res);
});

module.exports.getUsers = catchAsyncFunction(async (req, res) => {
  // console.log(req.query);
  const apiFeature = new ApiFeature(User.find(), req.query);
  // console.log(apiFeature);
  apiFeature.search().filter(req);
  const users = await apiFeature.query;
  res.status(200).json({ success: true, users });
});
module.exports.getCookie = (req, res) => {
  console.log(req.cookies);
  res.status(200).json(req.cookies);
};
module.exports.deleteUser = catchAsyncFunction(async (req, res, next) => {
  const deleteUser = await User.findById(req.params.id);
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
  const user = await User.findById(req.user._id).select("matches");
  const index = user.matches.includes(req.params.id.toString());
  let requestedUser;
  let match;
  if (index) {
    requestedUser = await User.findById(req.params.id)
      .select("+instagram")
      .select("+facebook")
      .select("+contact");
    match = true;
  } else {
    requestedUser = await User.findById(req.params.id);
    match = false;
  }
  if (!user) {
    return next(
      new ErrorHandler(`User with the id : ${req.params.id} was not found`, 404)
    );
  }
  res.status(201).json({ success: true, requestedUser, match });
});

module.exports.login = catchAsyncFunction(async (req, res, next) => {
  console.log("login post request");

  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter email and Password", 400));
  }

  const user = await User.findOne({ email: email }).select("+password");
  console.log(user);

  if (!user) {
    return next(new ErrorHandler("Invalid Email or password", 401));
  }
  console.log(user);
  const isPasswordMatched = await user.comparePassword(password);
  console.log(isPasswordMatched);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 402));
  }
  sendToken(user, 200, res);
});
module.exports.logout = catchAsyncFunction(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

module.exports.insertInterestedIn = catchAsyncFunction(
  async (req, res, next) => {
    const user = await User.findById(req.user._id)
      .select("+interestedIn")
      .select("+matches");
    // console.log(user);
    if (req.user._id.toString() === req.body.id.toString()) {
      return next(new ErrorHandler("Operation denied", 403));
    }
    let check = user.interestedIn.reduce((acc, obj) => {
      return acc || obj.toString() === req.body.id.toString();
    }, false);
    // console.log(check);
    const requestedUser = await User.findById(req.body.id)
      .select("+interestOf")
      .select("+interestedIn")
      .select("+matches");
    if (!requestedUser) {
      return next(new ErrorHandler("Could not find the user", 404));
    }
    let match = requestedUser.interestedIn.reduce((acc, obj) => {
      return acc || obj.toString() === req.user._id.toString();
    }, false);
    if (match) {
      user.matches.push(req.body.id);
      requestedUser.matches.push(user);
    }
    if (!check) {
      user.interestedIn.push(req.body.id);
      await user.save();
      requestedUser.interestOf.push(user);
      await requestedUser.save();
    } else {
      return next(
        new ErrorHandler("User already exists in your interests", 500)
      );
    }
    res.status(200).json({ success: true, user, match });
  }
);

module.exports.matches = catchAsyncFunction(async (req, res) => {
  // console.log(req.user);
  const user = await User.findById(req.user._id)
    .select("+matches")
    .populate("matches");
  res.status(200).json({ success: true, matches: user.matches });
});

module.exports.getInterestOf = catchAsyncFunction(async (req, res) => {
  // console.log(req.user);
  const user = await User.findById(req.user._id)
    .select("+interestOf")
    .populate("interestOf");
  res.status(200).json({ success: true, interestOf: user.interestOf });
});

module.exports.getInterestedIn = catchAsyncFunction(async (req, res) => {
  console.log("getInterestedIn called");
  const user = await User.findById(req.user._id)
    .select("+interestedIn")
    .populate("interestedIn");
  res.status(200).json({ success: true, interestedIn: user.interestedIn });
});
module.exports.removeInterestedIn = catchAsyncFunction(async (req, res) => {
  // console.log(req.user);
  const user = await User.findById(req.user._id).select("+interestedIn");
  await user.update({ $pull: { interestedIn: req.body.id.toString() } });
  const requestedUser = await User.findById(req.body.id).select("+interestOf");
  await requestedUser.update({
    $pull: { interestOf: req.user._id.toString() },
  });
  res.status(200).json({ success: true, message: "Removed successfully !" });
});
