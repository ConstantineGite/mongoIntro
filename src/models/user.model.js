const mongoose = require("mongoose");

const { Schema }  = mongoose;

const UserSchema = new Schema({
	name: {
		type: String
	},
	age: {
		type: Number,
		required: true,
		validate: function() {
			return this.age > 10
		}
	}
});

module.exports = mongoose.model("user", UserSchema);
