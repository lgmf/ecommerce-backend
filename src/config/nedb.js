const path = require("path");

const Collection = require("nedb");

const basePath = path.join("src/config/");

const db = {
  orders: new Collection({ filename: basePath.concat("orders.db"), timestampData: true, autoload: true }),
  products: new Collection({ filename: basePath.concat("products.db"), timestampData: true, autoload: true }),
  users: new Collection({ filename: basePath.concat("users.db"), timestampData: true, autoload: true })
};

module.exports = db;