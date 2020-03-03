const faker = require("faker");

const environment = require("../config/environment");
const db = require("../config/nedb");

const createMockProducts = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      color: faker.internet.color(),
      department: faker.commerce.department(),
      description: faker.commerce.productName(),
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

const users = [
  {
    token: "7b54adc5-1604-4254-83b3-0047b3934a03",
    firstName: "Monique",
    lastName: "Hoppe",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg",
    password: "4Tfw7YLa66G1nHm",
    username: "shaun63"
  },
  {
    token: "a5d9bb37-150f-4a6c-b066-6378bd94fc73",
    firstName: "Hardy",
    lastName: "O'Keefe",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg",
    password: "W_uX2xnYhCP4Blo",
    username: "anais_reinger67"
  },
  {
    token: "98c7ba16-4bd0-448a-80e6-866e579926c6",
    firstName: "Adaline",
    lastName: "Smith",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",
    password: "l9_Qk3AwP9olPsK",
    username: "bret_nitzsche"
  }
];

users.forEach(user => db.users.insert(user, function (err, doc) {
  if (err) {
    console.warn("USERS COLLECTION ERROR ====>", err);
    return;
  }
  console.warn("USER INSERTED ====>", doc);
}));


const products = createMockProducts(environment.productsCount);

products.forEach(product => db.products.insert(product, function (err, doc) {
  if (err) {
    console.warn("PRODUCTS COLLECTION ERROR ====>", err);
    return;
  }
  console.warn("PRODUCT INSERTED ====>", doc);
}));