const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  hobbies: [String],
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
  interestedIn: [
    {
      type: schema.Types.ObjectId,
      ref: "User",
    },
  ],
  interestOf: [
    {
      type: schema.Types.ObjectId,
      ref: "User",
    },
  ],
  matches: [
    {
      type: schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
