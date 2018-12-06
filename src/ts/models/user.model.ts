import mongoose from "mongoose";

const { Schema }  = mongoose;

const userSchema = new Schema({
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
	}
	// groups : {
	// 	type: [mongoose.Types.ObjectId],
	// 	ref: "group"
	// },
	// roles : {
	// 	type: [mongoose.Types.ObjectId],
	// 	ref: "role"
	// }
});

export default mongoose.model("user", userSchema);
