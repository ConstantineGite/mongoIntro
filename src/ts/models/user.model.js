const mongoose = require("mongoose");

const { Schema }  = mongoose;

const UserSchema = new Schema({
	login: {
		type: String
	},
	firstName : {
		type: String
	},
	secondName : {
		type: String
	},
	passwword : {
		type: String
	},
	email : {
		type: String
	},
	telephone: {
		type: String
	},
	visitingAdress : {
		type: String
	},
	roles : {
		type: Array
	},
	groups : {
		type: [mongoose.Types.ObjectId],
		ref: "group"
	},
	roles : {
		type: [mongoose.Types.ObjectId],
		ref: "role"
	}//,
	// age: {
	// 	type: Number,
	// 	required: true,
	// 	validate: function() {
	// 		return this.age > 10
	// 	}
	// }
});

module.exports = mongoose.model("user", UserSchema);
