app.controller('TripsController', function(tripFactory, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;

	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS

	that.addTrip = function() {
		that.errors = [];
		if(!that.newtrip.name){
			that.errors.push("You need to have a trip name.");
		}
		if(!that.newtrip.zipcode){
			that.errors.push("You need to know where you are going.");
		}
		if(!that.newtrip.date){
			that.errors.push("Please set a date for the trip.");
		}
		if(!that.newtrip.contact){
			that.errors.push("Please provide contact information.");
		}
		if(that.errors.length === 0){
			that.newtrip.id = userId;
			var now = new Date();
			that.newtrip.create_at = now.valueOf();
			that.newtrip.date = that.newtrip.date.valueOf();
			// console.log(that.newtrip);
			TripFactory.addTrip(that.newtrip, function() {});
		}
		that.newtrip = {};
		$location.path('/new_trip');
	};
});