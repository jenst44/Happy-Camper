var mongoose = require('mongoose');
var User = mongoose.model('User');

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
			var user = new User(req.body);
			// Check if User is in database
			User.find({name:req.body.name}, function(err, results){
				if(!results[0]){
					user.save(function(err) {
						if(err) {
							res.json(err);
						}
						else {
							res.json({message:'Successfully added a user'});
						}

					});	
				}
				else {
					res.json({message:"User name already in database"});
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