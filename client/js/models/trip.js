app.factory('TripFactory', function($http) {
	var factory = {};
	var trips = [];

	factory.getTrips = function(callback){
		$http.get('/trips').success(function(response){
			callback(response);
		});
	};
	
	factory.addTrip = function(tripinfo, callback) {
		$http.post('/trips', tripinfo).success(function(data){
			console.log(data);
			callback(data);
		});
	};
	
	factory.addUser = function(user, callback) {
		$http.post('/trips/update', user).success(function(data){
			console.log(data);
			callback(data);
		});
	}

	return factory;
});