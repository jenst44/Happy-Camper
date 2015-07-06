var customers = require('./../server/controllers/customers.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	});
	app.post('/customers', function(req, res) {
		console.log('in routes');
		customers.add(req, res);
	});
	app.delete('/customers/:id', function(req, res) {
		customers.remove(req, res);
	});
};
