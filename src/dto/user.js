class UserDTO {
  constructor(userModel) {
    this.token = userModel.token;
    this.firstName = userModel.firstName;
    this.lastName = userModel.lastName;
    this.avatar = userModel.avatar;
    this.username = userModel.username;
  }
}

module.exports = (user) => new UserDTO(user);
