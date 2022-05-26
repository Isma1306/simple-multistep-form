const { mongoose } = require('mongoose');
const Schema = require('../schemas/user.schema');


const User = mongoose.model('User', Schema.UserSchema);

const saveUser = async function (user) {
  try {
    const newUser = await User.create(user);
    newUser.save();
    return newUser;
  } catch (error) {
    console.log('saveUser :>> ', error);
  }
};


const destroyUser = async function (user) {
  try {
    const deletedUser = await User.deleteOne({ id: user._id });
    return deletedUser;
  } catch (error) {
    console.log('saveUser :>> ', error);
  }
};

const findUsers = async function () {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log('findUser :>> ', error);
  }
};

module.exports = {
  findUsers, saveUser, destroyUser
};
