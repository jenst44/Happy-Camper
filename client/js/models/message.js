app.factory('MessageFactory', function($http) {
	factory = {};
	message = [];

	factory.showMessages = function(callback) {
		$http.get('messages').success(function(data) {
			callback(data);
		})
	}

	factory.addMessage = function(info, callback) {
		$http.post('/messages', info).success(function(data){
			console.log(data);
			callback(data);
		});
	};

	factory.addComment = function(info, callback) {
		$http.post('/comments', info).success(function(data){
			console.log(data);
			console.log('in disss');
			callback(data);
		});
	}

	return factory;
});