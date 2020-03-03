/* eslint-disable no-undef */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  serverPort: process.env.SERVER_PORT,
  productsCount: process.env.PRODUCT_COUNT
};
