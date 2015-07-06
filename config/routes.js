var Users = require('./../server/controllers/Users.js');

module.exports = function(app) {
	app.get('/Users', function(req, res) {
		Users.show(req, res);
	});
	app.post('/Users', function(req, res) {
		console.log('in routes');
		Users.add(req, res);
	});
	app.delete('/Users/:id', function(req, res) {
		Users.remove(req, res);
	});
};
