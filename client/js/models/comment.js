app.factory('CommentFactory', function($http) {
	factory = {};
	message = [];

	factory.addComment = function(info, callback) {
		$http.post('/comments', info).success(function(data){
			console.log(data);
			console.log('in disss');
			callback(data);
		});
	}

	return factory;
});