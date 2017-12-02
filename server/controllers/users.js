module.exports = function (app, db) {
  app.post('/api/createUser', function (req, res) {
    var query = new db.User({
        email: req.body.email,
        name: req.body.email,
        phoneNumber: req.body.email,
        address: req.body.email,
        password: req.body.password
    });
    query.save();
  });

  app.post('/api/signIn', function (req, res) {

  });

  app.put('/api/user', function (req, res) {

  });

  app.delete('/api/user', function (req, res) {

  });
}
