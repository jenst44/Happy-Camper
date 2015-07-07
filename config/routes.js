var Users = require('./../server/controllers/Users.js');

module.exports = function(app) {
	app.get('/users', function(req, res) {
		Users.show(req, res);
	});
	app.post('/users', function(req, res) {
		Users.add(req, res);
	});
	app.delete('/users/:id', function(req, res) {
		Users.remove(req, res);
	});
	app.post('/login', function(req, res) {
		Users.loginValidate(req, res);
	});
};
