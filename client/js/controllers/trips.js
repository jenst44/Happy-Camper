app.controller('TripsController', function(TripFactory, $rootScope, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	if($rootScope.trip){
		that.trip = $rootScope.trip;
	}
	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS
	
	// if(!$rootScope.user){
	// 	$location.path('/login');
	// }
	var getTrips = function(){
		TripFactory.getTrips(function(data){
			that.trips = data;
			console.log(that.trips);
		});
	};

	that.addTrip = function() {
		// console.log("clicked");
		that.errors = [];
		if(!that.newtrip.name){
			that.errors.push("You need to have a trip name.");
		}
		if(!that.newtrip.city){
			that.errors.push("You need to know where you are going.");
		}
		var name = that.newtrip.city.toLowerCase();
		var cityNames = name.split(" ");
		that.newtrip.weather = cityNames.join("_");
		if(!that.newtrip.date){
			that.errors.push("Please set a date for the trip.");
		}
		if(!that.newtrip.contact){
			that.errors.push("Please provide contact information.");
		}
		if(that.errors.length === 0){
			var now = new Date();
			that.newtrip.created_at = now.valueOf();
			that.newtrip.date = that.newtrip.date.valueOf();
			// console.log(that.newtrip);
			TripFactory.addTrip(that.newtrip, function() {});
		}
		that.newtrip = {};
		$location.path('/new_trip');
	};

	that.showTrip = function(tripInfo) {
		$rootScope.trip = tripInfo;
		$location.path('/trip');
	};

	getTrips();
});