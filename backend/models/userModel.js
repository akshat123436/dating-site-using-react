const mongoose = require("mongoose");
const schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const catchAsyncFunction = require("../middlewares/catchAsyncFunction");
const userSchema = new schema({
  name: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  hobbies: [String],
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    validate: [validator.isEmail, "Please enter a valid email"],
    select: false,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password length should be greater or equal to 8"],
    select: false,
  },

  nature: {
    type: String,
    enum: ["introvert", "extrovert", "ambivert"],
    required: true,
  },
  images: [{ type: String, required: true }],
  about: { type: String, required: true },
  profession: String,
  age: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  interestedIn: {
    type: [
      {
        type: schema.Types.ObjectId,
        ref: "User",
      },
    ],
    select: false,
  },
  interestOf: {
    type: [
      {
        type: schema.Types.ObjectId,
        ref: "User",
      },
    ],
    select: false,
  },
  matches: {
    type: [
      {
        type: schema.Types.ObjectId,
        ref: "User",
      },
    ],
    select: false,
  },
  instagram: {
    type: String,
    select: false,
  },
  facebook: {
    type: String,
    select: false,
  },
  contact: {
    type: String,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // console.log("pre save middleware");
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  // console.log(this.password);
  // const result = await bcrypt.hash(enteredPassword, 10);
  // console.log(result);
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWTSECRET, {
    expiresIn: process.env.JWTEXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
