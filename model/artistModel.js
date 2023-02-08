const mongoose =  require("mongoose")
const { uuid } = require('uuidv4');


const artistSchema = new mongoose.Schema({
	uuid:{
		type:String,
		default: () => uuid.v4(),
		required: true,
		unique: true,
		index: true,
	  
		// required:[true,"id must be there"]
	},
	name:{
		type:String,
		required:[true,"artist name must be there"]
	},
	grammy:{
		type:Boolean,
		default:false
	}

})
const artist = mongoose.model('artist',artistSchema);
module.exports = artist;