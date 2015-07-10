var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema ({
	user_name: {type:String, required:true},
	comment: {type:String, required:true},
	created_at: {type:String, required:true},
	updated_at: {type:String, required:true}
});

var MessageSchema = new mongoose.Schema({
	trip_id: {type:String},
	user_name: {type:String, required:true},
	message: {type:String, required:true},
	comments: [CommentSchema],
	created_at: Date,
	updated_at: Date
});

mongoose.model('Message', MessageSchema);
// mongoose.model('Comment', CommentSchema);