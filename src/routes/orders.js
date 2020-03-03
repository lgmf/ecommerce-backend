const Order = require("../models/order");
const ordersService = require("../services/orders");

const getOrders = async (req, res) => {
  const { token } = req.currentUser;

  ordersService.getOrdersByUser(token, function (error, orders) {
    if (error) {
      res.status(500).json({
        errors: [
          {
            code: "INTERNAL_ERROR"
          }
        ]
      });
      return;
    }

    res.status(200).json(orders);
  });
};

const saveOrder = async (req, res) => {
  const { token } = req.currentUser;
  const { items } = req.body;

  const payload = new Order(items, token);

  ordersService.saveOrder(payload, function (error, inserted) {
    if (error) {
      res.status(500).json({
        errors: [
          {
            code: "INTERNAL_ERROR"
          }
        ]
      });
      return;
    }

    res.status(200).json(inserted);
  });
};

module.exports = {
  getOrders,
  saveOrder
};