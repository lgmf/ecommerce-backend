const userService = require("../services/user");
const userDTO = require("../dto/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    next();
    return;
  }

  const token = authorization.split(" ")[1];

  userService.getByToken(token, function (error, userModel) {
    if (error || !userModel) {
      next();
      return;
    }

    const user = userDTO(userModel);
    req.currentUser = user;
    next();
  });
};
