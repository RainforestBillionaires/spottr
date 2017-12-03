module.exports = function (mongoose) {
  var userSchema = new mongoose.Schema({
        email: {
          type: String,
          unique: true
        },
        fName: String,
        lName: String,
        phoneNumber: String,
        address: String,
        password: String
    });

  var adSchema = new mongoose.Schema({
    pictures: String,
    title: String,
    description: String,
    // location: null, TODO: fill this in
    value: Number,
    spotting: Boolean,
    userEmail: String
  });

  var transactionSchema = new mongoose.Schema({
    buyer: String,
    seller: String,
    adId: String,
    buyerSatisfied: Boolean,
    sellerSatisfied: Boolean
  });

  return {
    User: mongoose.model('User', userSchema),
    Ad: mongoose.model('Ad', adSchema),
    Transaction: mongoose.model('Transaction', transactionSchema)
  }
}
