const ProductsController = require("./products");
const SignInController = require("./signIn");
const HealthCheckController = require("./healthCheck");
const OrdersController = require("./orders");

module.exports = {
  registerOn: (server) => {
    server.get("/products", ProductsController);

    server.get("/health-check", HealthCheckController);

    server.post("/sign-in", SignInController);

    server.route("/orders").get(OrdersController.getOrders).post(OrdersController.saveOrder);
  }
};
