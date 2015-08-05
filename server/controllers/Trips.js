var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');
var User = mongoose.model('User');
var request = require('request');

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
			trip._user.push(req.body.user);
			trip.save(function(err){
				if(err)
					res.json({status:false, err:err});
				else
					res.json({status:true});
			});
		},
		adduser: function(req, res) {
			console.log(req.body.user_id);
			User.find({user_name: req.body.user_id}, function(err, results) {
				if(err){
					res.json({message:'Error in Query'});
				}
				else if(results == 0){
					res.json({message:'User Name not found'});
				}
				else {
					console.log('right here right now');
					console.log(results);
					id = results[0]._id;
					Trip.find({_id: req.body.trip._id}, function(err, results){
						if(err){
							res.json({message:'Error in trip Query'});
						}
						else {
							for(i=0; i<results[0]._user.length; i++){
								if(String(results[0]._user[i]) == String(id)){
									console.log('im here');
									res.json({message:'User Already in Group'});
									return false;
								}
							}
							results[0]._user.push(id);
							results[0].save(function(err){
								if(err){
									res.json({message:'Error in save Query'});
								}
								else {
									res.json({message:'Success!'})
								}
							});
						}
					});
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
		},
		weather: function(req, res){
			var options = {
				url: "http://api.openweathermap.org/data/2.5/forecast?q="+req.params.city+",us&mode=json&cnt=5&units=imperial&APPID=c1cc9d142bd3d306226d1e3f8d125cad",
				headers: {
					'User-Agent': 'request'
				}
			}
			function callback(error, response, body){
				if(!error && response.statusCode == 200) {
					var data = JSON.parse(body);
					res.json(data);
				} else {
					console.log(error);
					res.json({'error': 'error'})
				}
			}
			request(options, callback);
		}
	};
})();