import mongoose, { Document, Model, Schema } from "mongoose";

import { IPriviligies } from "./../data/const";

interface IRoleSchema extends Document {
	name: string;
	priviligies: IPriviligies[];
}

const roleSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: "ipsum lorem dolor"
	},
	priviligies: {
		type: [Object],
		required: true
	}
});

export default mongoose.model<IRoleSchema>("roles", roleSchema);
