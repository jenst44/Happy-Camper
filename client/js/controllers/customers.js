app.controller('CustomersController', function(CustomerFactory, $location) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.message;
	// Grabs customer list when controller is called
	CustomerFactory.getCustomers(function(data) {
		that.customers = data;
	});

	// $location.path('/users'); THIS IS HOW YOU REDIRECT TO OTHER PARTIALS

	that.addcustomer = function() {
		// Resest error caused by adding the same customer to the database
		if(that.new_customer){
			that.new_customer.created_at = Date.now();
		}
		CustomerFactory.addCustomer(that.new_customer, function(data) {
			CustomerFactory.getCustomers(function(data2) {
				that.customers = data2;
			});
			// Should be eiter Error of Success Message
			that.message = data.message
			that.new_customer = {};
		});

	}

	that.removecustomer = function(id) {
		// Data is success or error message
		CustomerFactory.removeCustomer(id, function(data) {
			// Grabs updated list of customers
			CustomerFactory.getCustomers(function(data2) {
				that.customers = data2;
			});
			that.message = data.message
			that.new_customer = {};
		});
	}
});