const userService = require("../services/user");
const userDTO = require("../dto/user");

module.exports = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    next();
    return;
  }

  const userModel = userService.getByToken(token);

  if (userModel) {
    const user = userDTO(userModel);
    req.currentUser = user;
  }

  next();
};
