const db = require("../config/nedb");

const collection = db.orders;

module.exports = {
  getOrdersByUser: (userToken, callback = console.log) => {
    collection.find({ "user": userToken }, callback);
  },
  saveOrder: (order, callback = console.log) => {
    collection.insert(order, callback);
  }
};
