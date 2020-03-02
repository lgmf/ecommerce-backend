const userService = require("../services/user");
const userDTO = require("../dto/user");

module.exports = (req, res) => {
  if (req.currentUser) {
    res.status(500).json({
      errors: [
        {
          code: "USER_ALREADY_AUTHENTICATED"
        }
      ]
    });
    return;
  }

  const { username, password } = req.body;

  const userModel = userService.getByUsername(username);

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
};
