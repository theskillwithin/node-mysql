const User = require("../models/User");
const Role = require("../models/Role");

exports.index = (req, res) => {
  res.send("Hello World from apiController");
};

const getRoleIDFromRole = async role => {
  const id = await Role.query()
    .findOne({ role_name: role })
    .pluck("id");
  return id;
};

exports.users = async (req, res) => {
  const users = await User.query();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const id = await getRoleIDFromRole(req.query.role);
  const users = await User.query().insert({
    username: req.query.username,
    email: req.query.email,
    role_id: id,
  });
  res.json(users);
};

exports.updateUser = async (req, res) => {
  const id = await getRoleIDFromRole(req.query.role);
  const usrUpdate = await User.query()
    .findById(req.params.id)
    .update({
      username: req.query.username,
      email: req.query.email,
      role_id: id,
    });
  res.json(usrUpdate);
};

exports.deleteUser = async (req, res) => {
  const users = await User.query().deleteById(req.params.id);
  res.json(users);
};
