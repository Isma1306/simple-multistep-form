const { saveUser, findUsers, destroyUser } = require('../models/user.model');


const getUsers = async function (req, res) {
  try {
    const users = await findUsers();
    res.send(users);
    res.status(200);
  } catch (error) {
    console.log('error in getUsers :>> ', error);
    res.status(500);
    res.send(error);
  }
};

const postUser = async function (req, res) {
  try {
    const user = await saveUser(req.body);
    res.send(user);
    res.status(201);
  } catch (error) {
    console.log('error in getUsers :>> ', error);
    res.status(500);
    res.send(error);
  }
};

const deleteUser = async function (req, res) {
  try {
    const user = await destroyUser(req.params);
    res.send(user);
    res.status(201);
  } catch (error) {
    console.log('error in deleteUsers :>> ', error);
    res.status(500);
    res.send(error);
  }
};


module.exports = {
  postUser, getUsers, deleteUser
};
