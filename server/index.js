const Express = require('express');
const cors = require('cors');
const { router } = require('./router');
const mongoose = require('mongoose');

const PORT = 3003;

const app = new Express();


app.use(cors());
app.use(Express.json());
app.use(router);


(async () => {
  try {
    app.listen(PORT, console.log(`listening http://localhost:${PORT}`));
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('connected to mongo :>> ');
  } catch (error) {
    console.log('index.js error :>> ', error);
  }
})();

module.exports = {
  mongoose
};
