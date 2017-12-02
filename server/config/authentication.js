var passport = require ('passport');
var localStrategy = require ('passport-local').Strategy;
var bcrypt = require('bcrypt');

module.exports.initPassport = function(db) {
  passport.use(new localStrategy({
      usernameField: 'email'
    },
    function(email, password, done) {
      db.findOne({ email: req.body.email }, function(err, user){
        if (err)
          return console.log(err);
        if (user == undefined) {
            return done(null, false, {
              message: 'User not found'
            });
        }
        validatePassword(password, user.password, function(err, res) {
          if (!res){
            return done(null, false, { message: 'Password is wrong'});
          }
          // If credentials are correct, return the user object
          return done(null, user);
        });
      });
    }
  ));
}

function validatePassword(enteredPassword, hashedPassword, callback) {
  bcrypt.compare(enteredPassword, hashedPassword, callback);
}
