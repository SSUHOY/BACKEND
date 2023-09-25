const User = require("../models/users");

const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const getUser = async (request, response) => {
  try {
    const { user_id } = request.params;
    const user = await User.findById(user_id);

    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.status(200).send(user);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const createUser = async (request, response) => {
  try {
    const user = await User.create({ ...request.body });
    response.status(201).send(user);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const updateUser = async (request, response) => {
  try {
    const { user_id } = request.params;
    const user = await User.findByIdAndUpdate(user_id, { ...request.body });

    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.status(200).send(user);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteUser = async (request, response) => {
  try {
    const { user_id } = request.params;
    const user = await User.findByIdAndDelete(user_id);

    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.status(200).send("Success");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };