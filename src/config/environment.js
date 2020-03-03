/* eslint-disable no-undef */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  productsCount: process.env.PRODUCT_COUNT
};
