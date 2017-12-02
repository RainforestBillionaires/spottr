var bcrypt = require('bcrypt');
var constants = require('./constants');
var passport = require ('passport');

module.exports = function (app, db) {
  app.post('/api/createUser', function (req, res) {
    console.log("POST - Creating user: " + req.body.email)
    db.User.findOne({ email: req.body.email }, function(err, user){
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
          query.save(function (err, createdUser) {
            if (err) {
              res.status(500).send('The user could not be saved.');
            } else {
              res.send(createdUser._id);
            }
          });
        });
      }
      else {
        res.status(404).send("A user with the specified email already exists.");
      }
    });
  });

  app.post('/api/signIn', function (req, res) {
    console.log("POST - User attempting to sign in: " + req.body.email)
    passport.authenticate('local', function (err, user, info){
      if (err){
        res.status(404).json(err);
        return;
      }
      // If a user is found
      if(user){
        console.log("User " + req.body.email + " was authenticated")
        res.status(200).send("Login successful.");
      }
      // If user is not found
      else {
        console.log("User " + req.body.email + " was not authenticated")
        res.status(401).json(info);
      }
    })(req,res);
  });

  app.put('/api/user', function (req, res) {
    console.log("PUT - User attempting to update information: " + req.body.email)
    passport.authenticate('local', function (err, user, info){
      if (err){
        res.status(404).json(err);
        return;
      }
      // If a user is found
      if(user){
        console.log("User " + req.body.email + " was authenticated for update")
        bcrypt.hash(req.body.newPassword, constants.SALT_ROUNDS, function(err, hash) {
          db.User.update({ email: req.body.email },
            {
              $set: {
                firstName: req.body.fName,
                lastName: req.body.lName,
                phoneNumber: req.body.phoneNum,
                address: req.body.address,
                password: hash
              }
            }, function(err, userUpdated) {
              if (err) {
                res.status(500).send('The user could not be saved.');
              } else {
                res.status(200).send("User information was successfully updated.");
              }
            });
        });
      }
      // If user is not found
      else {
        console.log("User " + req.body.email + " was not authenticated for update")
        res.status(401).json(info);
      }
    })(req,res);
  });

  app.delete('/api/user', function (req, res) {

  });
}
