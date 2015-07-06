app.controller('UsersController', function(UserFactory, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.message;
	// Grabs customer list when controller is called
	UserFactory.getUsers(function(data) {
		that.users = data;
	});

	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS

	that.addcustomer = function() {
		// Resest error caused by adding the same customer to the database
		if(that.new_user){
			that.new_user.created_at = Date.now();
		}
		UserFactory.addUser(that.new_user, function(data) {
			UserFactory.getCustomers(function(data2) {
				that.customers = data2;
			});
			// Should be eiter Error of Success Message
			that.message = data.message;
			that.new_user = {};
		});

	};

	that.removecustomer = function(id) {
		// Data is success or error message
		UserFactory.removeUser(id, function(data) {
			// Grabs updated list of customers
			UserFactory.getCustomers(function(data2) {
				that.customers = data2;
			});
			that.message = data.message;
			that.new_user = {};
		});
	};
});