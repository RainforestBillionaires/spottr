var bcrypt = require('bcrypt');
var constants = require('./constants');

module.exports = function (app, db) {
  app.post('/api/createUser', function (req, res) {
    console.log("POST - Creating user: " + req.body.email)
    db.findOne({ email: req.body.email }, function(err, user){
      if (err)
        return console.log(err);
      if (user == undefined) {
        bcrypt.hash(req.body.password, constants.SALT_ROUNDS, function(err, hash) {
          var query = new db.User({
              email: req.body.email,
              firstName: req.body.fName,
              lastName: req.body.lName,
              phoneNumber: req.body.phoneNum,
              address: req.body.address,
              password: hash
          });
          query.save();
        });
      }
      else {
        res.status(404).send("A user with the specified email already exists.");
      }
    });
  });

  app.post('/api/signIn', function (req, res) {

  });

  app.put('/api/user', function (req, res) {

  });

  app.delete('/api/user', function (req, res) {

  });
}
