const mongoose = require('mongoose');

const RegSchema = new mongoose.Schema({
	First_name: {
		type: String,
		required: true,
	},
	Last_name: {
		type: String,
		required: true,
	},
	Email:{
		type: String,
		required: true,
	},
	Password:{
		type: String,
		required: true,
	},
	Gender:{
		type: String,
		required: true,
	},
});

const Register_Post = mongoose.model("Register_Post", RegSchema);
module.exports = Register_Post;