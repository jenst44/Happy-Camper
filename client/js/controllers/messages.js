app.controller('MessagesController', function(MessageFactory, $location, $rootScope) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.messages = [];

	MessageFactory.showMessages(function(data) {
		that.messages = data;
		that.messages.sort().reverse();
	});

	if($rootScope.user){
	that.activeUser = $rootScope.user.user_name;
		
	}

	that.addmessage = function() {
		that.new_message.user_name = $rootScope.user.user_name;
		that.new_message.created_at = Date.now();
		that.new_message.updated_at = Date.now();
		that.new_message.trip_id = $rootScope.trip._id;
		console.log(that.new_message.trip_id);
		MessageFactory.addMessage(that.new_message, function(data) {
			MessageFactory.showMessages(function(data) {
				that.messages = data;
			});
			that.new_user = {};
		});
		that.new_message = {};
	}

	that.showmessages = function() {
		MessageFactory.showMessages(function(data) {
			that.messages = data;
		});
	}

	that.deletemessage = function(id) {
		MessageFactory.deleteMessage(id, function(data) {
			MessageFactory.showMessages(function(data) {
				that.messages = data;
			});
		})
	}
});