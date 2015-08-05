app.factory('WeatherFactory', function($http) {
	var factory = {};

	factory.show = function(city, callback) {
		$http.get('/weather/'+city).success(function(res){
			console.log(res);
			callback(res);
		})
	}
	return factory;
})