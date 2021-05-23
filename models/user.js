const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  aadhar: {
    type: Number,
    min: 12,
    max:12,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
},
age: { 
   type: Number,
   min: 18, max: 65, 
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
    min:6,
    max:6,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    min:0,
    max:10,
    required: true,
  },
  alternate_phone: {
    type: Number,
    min:0,
    max:10,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  soil: {
    type: String,
    enum:["red","black","other"],
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
