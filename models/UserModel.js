const mongoose = require("mongoose");

const jwt = require('jsonwebtoken');

const User = new mongoose.Schema(
  {
    login: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


User.methods.generateAuthToken = (user) => {
  const token = jwt.sign({ _id: user._id }, 'authpick');
  return token;
};


module.exports = mongoose.model("User", User);