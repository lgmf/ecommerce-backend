const productService = require("../services/product");

module.exports = (req, res) => {
  const { page, limit } = req.query;

  productService.list(page, limit, function (error, products) {
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

    res.status(200).json(products);
  });
};
