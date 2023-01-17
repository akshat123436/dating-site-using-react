const User = require("../models/userModel");

module.exports.createUser = async (req, res) => {
  const newUser = await new User(req.body).save({ validateBforeSave: true });
  res.status(201).json({ success: true, newUser });
};
