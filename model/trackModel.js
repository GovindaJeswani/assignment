const mongoose =  require("mongoose")
const { uuid } = require('uuidv4');
const artist = require('./artistModel')

const trackSchema = new mongoose.Schema({
	// uuid:{
	// 	type:String,
	// 	default: () => uuid.v4(),
	// 	required: true,
	// 	unique: true,
	// 	index: true,
	  
	// },
	name:{
		type:String,
		// required:[true,"Track name must be there"]
	},
	artistId:{
		type:mongoose.Schema.ObjectId,
		ref:'artist' || null
	},
	duration:{
		type: Number,
	}

})
const track = mongoose.model('track',trackSchema);
module.exports = track;