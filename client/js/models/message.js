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
			callback(data);
		});
	}

	factory.deleteMessage = function(id, callback) {
		$http.delete('/messages/'+id).success(function(data) {
			callback(data);
		})
	}

	factory.deleteComment = function(message_id, comment_id, callback) {
		$http.delete('comments/'+message_id+"/"+comment_id).success(function(data) {
			callback(data);
		})
	}

	return factory;
});