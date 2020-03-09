const HealthCheckController = require("./healthCheck");
const HomeController = require("./home");
const OrdersController = require("./orders");
const ProductsController = require("./products");
const SignInController = require("./signIn");

module.exports = {
  registerOn: (server) => {
    server.get("/", HomeController);

    server.get("/products", ProductsController);

    server.get("/health-check", HealthCheckController);

    server.post("/sign-in", SignInController);

    server.route("/orders").get(OrdersController.getOrders).post(OrdersController.saveOrder);
  }
};
