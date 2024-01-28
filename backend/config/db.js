const mongoose = require("mongoose");


const connect = async () => {
  await mongoose.connect('mongodb+srv://sasikumarchanthiran3:sasimaha20@gmialdb.pler5sn.mongodb.net/?retryWrites=true&w=majority');
};

module.exports = connect;


