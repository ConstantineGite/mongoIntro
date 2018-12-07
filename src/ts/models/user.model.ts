import mongoose from "mongoose";

const { Schema }  = mongoose;

export interface IUserSchema extends mongoose.Document {
	login: string;
	roles: string[];
}

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
	},
	// groups : {
	// 	type: [mongoose.Types.ObjectId],
	// 	ref: "group"
	// },
	roles : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "role"
	}]
});

export default mongoose.model<IUserSchema>("user", userSchema);
