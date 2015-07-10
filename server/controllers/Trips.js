var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

module.exports = (function() {
	return {
		show: function(req, res) {
			Trip.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
		   });
		},
		addtrip: function(req, res) {
			var trip = new Trip(req.body);
			console.log(trip);
			trip.save(function(err){
				if(err)
					res.json({status:false, err:err});
				else
					res.json({status:true});
			});
		},
		loginValidate: function(req, res) {
			User.find({user_name:req.body.user_name}, function(err, results) {
				if(err || !results[0]) {
					res.json({message:'User name not found'});
					console.log('here');
				}
				else {
					if(bcrypt.compareSync(req.body.password, results[0].password)) {
						res.json({message:"Login Successful", user_name:results[0].user_name,
						trip_ids:results[0].trip_ids, email:results[0].email, phone_number:results[0].phone_number, id:results[0]._id});
					}
					else{
						res.json({message:"Login Unsucessful"});
					}
				}
			});
		},
		remove: function(req, res) {
			console.log(req.params);
			User.remove({_id:req.params.id}, function(err, results) {
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
			});
		}
	};
})();