app.controller('WeatherController', function(WeatherFactory, $location, $rootScope) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.messages = [];
	that.weather_data = {};

	WeatherFactory.show(function(data) {
		console.log(data);
		that.weather_data.city_name = data.city.name;
		that.weather_data.description = data.list[0].weather[0].description;
		that.weather_data.temp = data.list[0].main.temp;
		that.weather_data.icon = data.list[0].weather[0].icon;
		console.log(that.weather_data);
	});
});