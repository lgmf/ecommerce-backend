const express = require("express");

const environment = require("./config/environment");
const middlewares = require("./middlewares");
const routes = require("./routes");

const server = express();

// Register middlewares
middlewares.registerOn(server);

// Register custom routes
routes.registerOn(server);

server.set("port", environment.port || 80);

server.listen(server.get("port"), () => {
  console.log(`JSON Server is running at port ${server.get("port")}`);
});
