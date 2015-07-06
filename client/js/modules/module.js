var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});