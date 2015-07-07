var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	})
	.when('/login', {
		templateUrl: 'partials/login.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});