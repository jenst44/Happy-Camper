var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Message = mongoose.model('Message');
// var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		show: function(req, res) {
			Message.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
		   });
		},
		add: function(req, res) {
			console.log(req.body);
			req.body.comments = [];
			var message = new Message(req.body);
			message.save(function(err) {
				if(err) {
					res.json({message:err});
				}
				else {
					res.json({message:'Successfully added a message'});
				}
			});	
		},
		remove: function(req, res) {
			console.log(req.params);
			Message.remove({_id:req.params.id}, function(err, results) {
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
			});
		},

		removeComment: function(req,res) {
			console.log(req.params.comment_id);
			console.log('herenow');
			Message.update({_id:req.params.message_id}, {$pull: {comments: {_id: req.params.comment_id}}}, function(err, results) {
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
			});
		},

		addComment: function(req, res) {
			Message.findOne({_id:req.body.message_id}, function(err, results){
				if(err) {
					res.json(err);
				}
				else {
					console.log(results.comments);
					var NewComment = req.body;
					var updatedComments = results.comments.push(NewComment);
					results.save(function(err, results) {
						if(err) {
							res.json(err);
						} else {
							res.json(results);
						}
					})
				}
			})
		}
	};
})();