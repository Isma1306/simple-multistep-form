const { Router } = require('express');
const { getUsers, postUser, deleteUser } = require('./controller/controller');


const router = new Router();


router.get('/users', getUsers);
module.exports = {
  router
};


router.post('/users', postUser);
module.exports = {
  router
};

router.delete('/users/:id', deleteUser);
module.exports = {
  router
};
