var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new mongoose.Schema({
	_user: {type: Schema.ObjectId, ref: 'User'},
	name: {type:String, required:true},
	date: {type:Number, required:true},
	zipcode: {type:Number, required:true},
	contact: {type:String, required:true},
	created_at: {type:Number, required:true},
	imgurl: {type:String}
});

mongoose.model('Trip', TripSchema);