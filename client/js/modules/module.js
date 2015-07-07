var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	})
	.when('/login', {
		templateUrl: 'partials/login.html'
	})
	.when('/home', {
		templateUrl: 'partials/home.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/trip', {
		templateUrl: 'partials/trip.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});