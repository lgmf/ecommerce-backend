const db = require("../config/nedb");

const collection = db.products;

module.exports = {
  list: (page = 1, limit = 10, callback = console.log) => {
    collection.find({}).skip(page).limit(limit).exec(callback);
  }
};
