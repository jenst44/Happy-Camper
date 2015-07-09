app.controller('TripsController', function(tripFactory, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;

	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS

	that.addTrip = function() {
		console.log(that.newtrip);
		that.errors = [];
		if(!that.newtrip.name){
			console.log("in name error");
			that.errors.push("You need to have a trip name.");
		}
		if(!that.newtrip.zipcode){
			console.log("in zip error");
			that.errors.push("You need to know where you are going.");
		}
		if(!that.newtrip.date){
			that.errors.push("Please set a date for the trip.");
		}
		if(!that.newtrip.contact){
			that.errors.push("Please provide contact information.");
		}
		if(that.errors.length !== 0){
			$location.path('/new_trip');
		} else {
			
		}
		// 	var now = Date.now();
		// 	that.newtrip.create_at = new Date(now);
		// }
		// console.log(that.newtrip);
		// var time = getTime(that.newtrip.date - that.newtrip.create_at);
		// console.log(time);
		// Resest error caused by adding the same customer to the database
		// if(that.new_user){
		// 	that.new_user.created_at = Date.now();
		// }
		// UserFactory.addUser(that.new_user, function(data) {
		// 	UserFactory.getCustomers(function(data2) {
		// 		that.customers = data2;
		// 	});
		// 	// Should be eiter Error of Success Message
		// 	that.messages = data.messages;
		// 	that.new_user = {};
		// });

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