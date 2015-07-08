app.controller('MessagesController', function($location, $rootScope) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.addmessage = function() {
		console.log(that.new_message.messagem);
	}
});