const cors = require("cors");
const bodyParser = require("body-parser");

const currentUser = require("./currentUser");
const auth = require("./auth");

module.exports = {
  registerOn: (server) => {
    server.use(cors());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // Custom middlewares
    server.use(currentUser);
    server.use(auth);
  }
};
