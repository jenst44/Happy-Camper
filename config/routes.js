var Users = require('./../server/controllers/Users.js');
var Trips = require('./../server/controllers/Trips.js');
var Messages = require('./../server/controllers/Messages.js');

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
	app.get('/messages', function(req, res) {
		Messages.show(req, res);
	});
	app.post('/messages', function(req, res) {
		Messages.add(req, res);
	});
	app.delete('/messages/:id', function(req, res) {
		Messages.remove(req, res);
	});
	app.post('/comments', function(req, res) {
		Messages.addComment(req, res);
	});
	app.delete('/comments/:message_id/:comment_id', function(req, res) {
		Messages.removeComment(req, res);
	});
	app.get('/trips', function(req, res) {
		Trips.show(req, res);
	});
	app.post('/trips', function(req, res) {
		Trips.addtrip(req, res);
	});
	app.post('/trips/update', function(req, res) {
		Trips.adduser(req, res);
	})
};
