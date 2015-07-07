app.factory('LoginFactory', function($http) {
	factory = {};
	users = [];

	factory.addUser = function(info, callback) {
		$http.post('/users', info).success(function(data){
			console.log(data);
			callback(data);
		});
	};
	factory.checkLogin = function(info, callback) {
		$http.post('/login', info).success(function(data){
			callback(data);
		});
	}
	return factory;
});