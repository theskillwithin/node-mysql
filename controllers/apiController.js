const User = require("../models/User");

exports.index = (req, res) => {
  res.send("Hello World from apiController");
};

exports.users = async (req, res) => {
  const users = await User.query();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const users = await User.query().insert({
    id: 2,
    username: "theskillwithin2",
    email: "emai2l@ema2il.com",
    role_id: 5,
  });
  res.json(users);
};


exports.deleteUser = async (req, res) => {
  const users = await User.query().deleteById(req.params.id);
  res.json(users);
};
