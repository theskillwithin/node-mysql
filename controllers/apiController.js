const User = require("../models/User");

exports.index = (req, res) => {
  res.send("Hello World from apiController");
};

exports.users = async (req, res) => {
  const users = await User.query();
  res.json(users);
};
