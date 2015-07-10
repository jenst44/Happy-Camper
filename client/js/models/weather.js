app.factory('WeatherFactory', function($http) {
	var factory = {};

	factory.show = function(city, callback) {
		$http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+",us&mode=json&cnt=5&units=imperial&APPID=c1cc9d142bd3d306226d1e3f8d125cad")
		.success(function(res){
			callback(res);
		})
	}
	return factory;
})