var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: {type:String, required:true},
	created_at: Date
});

mongoose.model('Customer', CustomerSchema);