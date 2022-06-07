const mongoose = require('mongoose');

const db = mongoose.connect(
    "mongodb+srv://umar:1234@cluster0.wdqbw.mongodb.net/TaskManagement?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    (err) => {
      if (!err) {
        console.log("DB has connected!");
      } else {
        console.log(err);
      }
    }
  );

  module.exports = db;