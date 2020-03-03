const db = require("../config/nedb");

const collection = db.users;

module.exports = {
  getByUsername: function (username, callback = console.log) {
    collection.findOne({ username }, callback);
  },
  getByToken: function (token, callback = console.log) {
    collection.findOne({ token }, callback);
  }
};
