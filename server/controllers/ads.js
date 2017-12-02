module.exports = function (app, db) {
  app.post('/api/ad', function (req, res) {
    console.log(`(POST) Creating ad ${req.body.title}`);
    db.User.findOne({ 'email': req.body.email }, function (err, user) {
      if (err) {
        console.log(err);
        res.status(500).end()
      } else if (user === null) {
        res.status(404).send('This user does not exist.');
      } else {
        var ad = new db.Ad({
          pictures: req.body.pictures,
          title: req.body.title,
          description: req.body.description,
          // location: req.body.location TODO: fill this in
          value: req.body.value,
          spotting: req.body.spotting,
          userEmail: req.body.email
        });
        ad.save(function (err, savedAd) {
          if (err) {
            res.status(500).send('The ad could not be saved.');
          } else {
            res.send(savedAd._id);
          }
        });
      }
    });
  });

  app.delete('/api/ad/:adId', function (req, res) {
    console.log(`(DELETE) Deleting ad ${req.params.adId}`);
    db.Ad.remove({ _id: req.params.adId }, function (err) {
      if (err) {
        console.log(err);
        res.status(500).send('Could not delete ad.');
      } else {
        res.status(200).end()
      }
    })
  });

  app.get('/api/ad/:adId', function (req, res) {

  });

  app.put('/api/ad/:adId', function (req, res) {

  });

  app.get('/api/ads/:searchText', function (req, res) {

  });

}
