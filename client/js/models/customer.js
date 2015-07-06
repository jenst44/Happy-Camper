app.factory('CustomerFactory', function($http) {
	var factory = {};
	var customers = [];

	factory.getCustomers = function(callback) {
		$http.get('/customers').success(function(output) {
			customers = output;
			customers.sort().reverse();
			callback(customers);
		})
	}

	factory.addCustomer = function(info, callback) {
		$http.post('/customers', info).success(function(data){
			console.log(data);
			callback(data);
		});
	}

	factory.removeCustomer = function(id, callback) {
		$http.delete('/customers/'+id).success(function(data){
			callback(data);
		});
	}

	return factory;
})