class User {
  constructor(token, firstName, lastName, avatar, password, username) {
    this.token = token;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.password = password;
    this.username = username;
  }
}

module.exports = User;
