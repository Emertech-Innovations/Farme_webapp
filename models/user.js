const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: null,
  },
  gender: {
    type: String,
    required: true,
    default: null,
  },
  address: {
    type: String,
    required: true,
  },
  aadhar: {
    type: Number,
    minlength: 12,
    maxlength: 12,
    required: true,
    unique: true,
  },
  dob: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  tahshil: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  pin_code: {
    type: Number,

    minlength: 6,
    maxlength: 6,
    required: true,
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
  alternate_phone: {
    type: Number,
    minlength: 0,
    maxlength: 13,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  soil: {
    type: String,
    enum: ["red", "black", "other"],
    reuired: true,
  },
  crops: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
