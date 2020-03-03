const userService = require("../services/user");
const userDTO = require("../dto/user");

module.exports = (req, res) => {
  const { username, password } = req.body;

  userService.getByUsername(username, function (error, userModel) {
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

    const isAuthenticated = !!userModel && userModel.password === password;

    if (isAuthenticated) {
      const user = userDTO(userModel);
      res.status(200).json(user);
    } else {
      res.status(401).json({
        errors: [
          {
            code: "AUTHENTICATION_FAILED"
          }
        ]
      });
    }
  });
};
