app.controller('TripsController', function(TripFactory, $rootScope, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	if($rootScope.trip){
		that.trip = $rootScope.trip;
	}
	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS
	
	if(!$rootScope.user){
		$location.path('/login');
	} else {
		that.user = $rootScope.user;
	}
	var getTrips = function(){
		TripFactory.getTrips(function(data){
			that.trips = data;
		});
	};

	that.addTrip = function() {
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
			that.newtrip.user = $rootScope.user.id;
			TripFactory.addTrip(that.newtrip, function() {});
		}
		that.newtrip = {};
		$location.path('/home');
	};

	that.showTrip = function(tripInfo) {
		$rootScope.trip = tripInfo;
		$rootScope.trip.count = tripInfo._user.length
		$location.path('/trip');
	};

	that.addUser = function(trip) {
		if(that.add_user.user_id.length == 0){
			that.message = 'User Id cannot be blank';
		}
		else
		{
			that.add_user.trip = trip;
			TripFactory.addUser(that.add_user, function(data) {
				if(data.message == "Success!"){
					that.trip.count ++;
				}
				that.message = data.message;
			})
		}
		that.add_user={};
	}

	getTrips();
});