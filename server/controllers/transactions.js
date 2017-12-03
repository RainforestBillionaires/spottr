var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AYuklcEN0WXiLGMcBXS7mK9WNLOg7DTGm1pssmaOclVZjbgv0wtT5hv4kfrdjXqNae2_7s5C8rU0f9Ii', // please provide your client id here
  'client_secret': 'EKU-80u76mdGoYAHiKa3tGoucFUypayA6pYrhakdZY9AoDCjgpqcCzC01950-cajopq9T2dBn0lrmsfV' // provide your client secret here
});

module.exports = function (app, db) {

  app.get('/api/transaction/success', function (req, res) {
      console.log(req);
  });

  // start payment process
  app.get('/api/transaction/:adId' , (req, res) => { //TODO changed for testing
  	// create payment object
    db.Ad.findOne({ _id: req.params.adId }, function (err, ad) {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else if (ad === null) {
        res.status(404).send('This ad does not exist.');
      } else {
        var payment = {
          "intent": "authorize",
        	"payer": {
        		"payment_method": "paypal"
        	},
        	"redirect_urls": {
        		"return_url": "http://localhost:3000/success",
        		"cancel_url": "http://localhost:3000/err"
        	},
        	"transactions": [{
        		"amount": {
        			"total": ad.value,
        			"currency": "USD"
        		},
        		"description": ad.description
        	}]
        }
    	  // call the create Pay method
        createPay( payment ).then( ( transaction ) => {
                var id = transaction.id;
                var links = transaction.links;
                var counter = links.length;
                while( counter -- ) {
                    if ( links[counter].method == 'REDIRECT') {
    					// redirect to paypal where user approves the transaction
                        return res.redirect( links[counter].href )
                    }
                }
            })
            .catch( ( err ) => {
                console.log( err );
                res.redirect('/err');
            });
      }
    });
  });

  // success page
  app.get('/success' , (req ,res ) => {
      console.log(req.query);
      res.redirect('/success.html');
  })

  // error page
  app.get('/err' , (req , res) => {
      console.log(req.query);
      res.redirect('/err.html');
  })

  app.post('/api/payment', function (req, res) {

  });

  app.post('/api/transaction', function (req, res) {

  });
}

// helper functions
var createPay = ( payment ) => {
    return new Promise( ( resolve , reject ) => {
        paypal.payment.create( payment , function( err , payment ) {
         if ( err ) {
             reject(err);
         }
        else {
            resolve(payment);
        }
        });
    });
}
