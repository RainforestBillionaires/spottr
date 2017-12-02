module.exports = function (mongoose) {
    var userSchema = new mongoose.Schema({
        email: String,
        fName: String,
        lName: String,
        phoneNumber: String,
        address: String,
        password: String
    });

  return {
    User: mongoose.model('User', userSchema)
  }
}
