app.controller('CommentsController', function(MessageFactory, $location, $rootScope) {
	// this becomes that so that we have access to it in the functions
	var that = this;

	that.addcomment = function(id, callback) {
		that.new_comment.created_at = Date.now();
		that.new_comment.updated_at = Date.now();
		that.new_comment.user_name = $rootScope.user.user_name;
		that.new_comment.message_id = id;
		MessageFactory.addComment(that.new_comment, function(data) {
			that.new_comment = {};
			callback();
		});
	}

	that.deletecomment = function(message_id, comment_id, callback) {
		// console.log(comment_id._id);
		MessageFactory.deleteComment(message_id, comment_id._id, function(data) {
			callback();
		})
	}
});