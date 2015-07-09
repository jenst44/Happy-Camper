var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

module.exports = (function() {
	return {
		show: function(req, res) {
			User.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
		   });
		},
		add: function(req, res) {
			console.log(req.body);
			req.body['salt'] = bcrypt.genSaltSync(10);
			req.body.password = bcrypt.hashSync(req.body.password, req.body.salt);
			console.log(req.body);
			var user = new User(req.body);
			// Check if User is in database
			User.find({user_name:req.body.user_name}, function(err, results){
				if(!results[0]){
					User.find({email:req.body.email}, function(err, results){
						if(!results[0]) {
							user.save(function(err) {
								if(err) {
									res.json({message:err});
								}
								else {
									res.json({message:'Successfully added a user'});
								}
							});	
						} else {
							res.json({message:'Email Already in database'});
						}
					});
				}
				else {
					res.json({message:"User name already in database"});
				}
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