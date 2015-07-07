var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	user_name: {type:String, required:true},
	password: {type:String, required:true},
	email: {type:String, required:true},
	phone_number: String,
	salt: String,
	trip_ids: [{type: Schema.Types.ObjectId, ref: 'Trip'}],
	created_at: Date,
	updated_at: Date
});

mongoose.model('User', UserSchema);