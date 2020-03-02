const userService = require("../services/user");

const { productsCount } = require("../config/environment");

const faker = require("faker");

const fs = require("fs");

const getProducts = () => {
  return Array.from({ length: productsCount }).map(() => {
    return {
      color: faker.internet.color(),
      department: faker.commerce.department(),
      description: faker.commerce.productName(),
      id: faker.random.uuid(),
      image: {
        xs: "https://via.placeholder.com/250",
        sm: "https://via.placeholder.com/400",
        md: "https://via.placeholder.com/550",
        lg: "https://via.placeholder.com/700",
      },
      material: faker.commerce.productMaterial(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: faker.random.number(100)
    };
  });
};

const getOrders = (users) => {
  return users.reduce((result, user) => {
    return {
      ...result,
      [user.token]: []
    };
  }, {});
};

const users = userService.list();

const products = getProducts();

const orders = getOrders(users);

const dbData = {
  users,
  products,
  orders,
};

fs.writeFileSync("db.json", JSON.stringify(dbData));
