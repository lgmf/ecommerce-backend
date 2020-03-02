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

module.exports = {
  list: function () {
    return users;
  },
  getByUsername: function (username) {
    const found = users.find(u => u.username === username);
    return found ? { ...found } : null;
  },
  getByToken: function (token) {
    const found = users.find(u => u.token === token);
    return found ? { ...found } : null;
  }
};
