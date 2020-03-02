const dotenv = require("dotenv");

const result = dotenv.config()

if (result.error) {
  throw new Error("Check your environment variables")
}

module.exports = {
  serverPort: result.parsed.SERVER_PORT,
  productsCount: result.parsed.PRODUCT_COUNT,
  usersCount: result.parsed.USERS_COUNT
};
