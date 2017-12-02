module.exports = function (mongoose) {
  var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    phoneNumber: String,
    address: String,
    salt: String,
    password: String
  });

  return {
    User: mongoose.model('User', userSchema)
  }
}
