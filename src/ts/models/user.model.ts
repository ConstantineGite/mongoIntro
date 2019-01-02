import mongoose from "mongoose";

const { Schema }  = mongoose;

export interface IUserSchema extends mongoose.Document {
	_id: string;
	login: string;
	roles: string[];
}

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		default: "ipsum dolor amet"
	},
	firstName: {
		type: String,
		required: true,
		default: "ipsum dolor amet"
	},
	lastName: {
		type: String,
		required: true,
		default: "ipsum dolor amet"
	},
	approved: {
		type: Boolean,
		required: true,
		default: false
	},
	email: {
		type: String,
		required: true,
		default: "test@gmail.com"
	},
	telephone: {
		type: String,
		required: true,
		default: "+38063385283"
	},
	visitingAdress : {
		type: String,
		required: true,
		default: "Test addres"
	},
	avatar: {
		type: String
	},
	groups: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "groups"
	}],
	roles: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "roles"
	}]
});

export default mongoose.model<IUserSchema>("users", userSchema);
