const jsonServer = require("json-server");

const environment = require("./config/environment");

const auth = require("./middlewares/auth");

const signIn = require("./routes/signIn");
const healthCheck = require("./routes/healthCheck");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const defaultMiddlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, no-cache)
server.use(defaultMiddlewares);

// Custom middlewares
server.use(jsonServer.bodyParser);
server.use(auth);

// Custom routes
server.get("/health-check", healthCheck);
server.post("/sign-in", signIn);

// Register the router
server.use(router);

server.listen(environment.serverPort, () => {
  console.log(`JSON Server is running at port ${environment.serverPort}`);
});
