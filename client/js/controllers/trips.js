app.controller('TripsController', function(tripFactory, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;

	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS

	that.addTrip = function() {
		that.messages = [];
		if(that.newtrip){
			var now = Date.now();
			create_at = new Date(now);
		}
		var schedule = new Date(that.newtrip.date)
		console.log(create_at.getTime());
		console.log(schedule.getTime());
		console.log(that.newtrip);
		var time = getTime(that.newtrip.date - that.newtrip.create_at);
		console.log(time);
		// Resest error caused by adding the same customer to the database
		if(that.new_user){
			that.new_user.created_at = Date.now();
		}
		UserFactory.addUser(that.new_user, function(data) {
			UserFactory.getCustomers(function(data2) {
				that.customers = data2;
			});
			// Should be eiter Error of Success Message
			that.messages = data.messages;
			that.new_user = {};
		});

	};

	// that.removecustomer = function(id) {
	// 	// Data is success or error message
	// 	UserFactory.removeUser(id, function(data) {
	// 		// Grabs updated list of customers
	// 		UserFactory.getCustomers(function(data2) {
	// 			that.customers = data2;
	// 		});
	// 		that.messages = data.messages;
	// 		that.new_user = {};
	// 	});
	// };
});