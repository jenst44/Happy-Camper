var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
		   })
		},
		add: function(req, res) {
			console.log(req.body);
			var customer = new Customer(req.body);
			// Check if Customer is in database
			Customer.find({name:req.body.name}, function(err, results){
				if(!results[0]){
					customer.save(function(err) {
						if(err) {
							res.json(err);
						}
						else {
							res.json({message:'Successfully added a customer'});
						}

					})	
				}
				else {
					res.json({message:"Customer name already in database"});
				}
			})
		},
		remove: function(req, res) {
			console.log(req.params);
			Customer.remove({_id:req.params.id}, function(err, results) {
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
			})
		}
	}
})();