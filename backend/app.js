const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRoutes);

module.exports = app;
