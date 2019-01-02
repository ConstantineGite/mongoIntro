import mongoose, { Document, Schema } from "mongoose";

interface IGroupSchema extends Document {
	name: string;
}

const groupSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: "test"
	},
	description: {
		type: String,
		required: true,
		default: "test"
	},
	email: {
		type: String,
		required: true,
		default: "test"
	},
	telephone: {
		type: String,
		required: true,
		default: "test"
	},
	visitingAddress: {
		type: String,
		required: true,
		default: "test"
	}
});

export default mongoose.model<IGroupSchema>("groups", groupSchema);
