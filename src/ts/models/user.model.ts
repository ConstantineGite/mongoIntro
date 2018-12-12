import mongoose from "mongoose";

const { Schema }  = mongoose;

export interface IUserSchema extends mongoose.Document {
	_id: string;
	login: string;
	roles: string[];
}

const userSchema = new Schema({
	userName: {
		type: String
	},
	firstName : {
		type: String
	},
	lastName : {
		type: String
	},
	password : {
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
	avatar : {
		type: String
	},
	groups : {
		type: mongoose.Schema.Types.ObjectId,
		ref: "group"
	},
	roles : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "role"
	}]
});

export default mongoose.model<IUserSchema>("user", userSchema);