app.factory('UserFactory', function($http) {
	var factory = {};
	var users = [];

	factory.getUsers = function(callback) {
		$http.get('/users').success(function(output) {
			users = output;
			users.sort().reverse();
			callback(users);
		});
	};

	factory.addUser = function(info, callback) {
		$http.post('/users', info).success(function(data){
			console.log(data);
			callback(data);
		});
	};

	factory.removeUser = function(id, callback) {
		$http.delete('/users/'+id).success(function(data){
			callback(data);
		});
	};
	return factory;
});