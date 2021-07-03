const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: null,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  phone: {
    type: Number,
    minlength: 0,
    maxlength: 13,
    required: true,
  },
  message: {
    type: String,
    required: true,
    default: null,
  }
});

module.exports = User = mongoose.model("user", UserSchema);
