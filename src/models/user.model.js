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
		type: Array
	}//,
	// age: {
	// 	type: Number,
	// 	required: true,
	// 	validate: function() {
	// 		return this.age > 10
	// 	}
	// }
});

const GroupsSchema = new Schema({
	groups : {
		type: Array
	}
});

const RolesSchema = new Schema({
	groups : {
		type: Array
	}
});

module.exports = mongoose.model("user", UserSchema);
