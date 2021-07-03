const User = require("../models/user");

exports.register = async function (req, res) {
  try {
    const {
      name,
      email,
      phone,
     message,
      
    } = req.body;
    const newUser = new User({
      name,
      email,
      phone,
      message,
    });
    await newUser.save();
    return res.send({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
    return res.status(403).send({
      msg: "error",
    });
  }
};

exports.getAll = async function (req, res) {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    console.log(err);
  }
};
