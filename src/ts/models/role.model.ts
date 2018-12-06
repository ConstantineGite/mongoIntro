import mongoose, { Document, Model, Schema } from "mongoose";

import { IPriviligies } from "./../data/const";

interface ISchema extends Document {
	name: string;
	priviligies: IPriviligies[];
}

const roleSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	priviligies: {
		type: [Object],
		required: true
	}
});

const mRole: Model<ISchema> = mongoose.model<ISchema>("role", roleSchema);

export default mRole;
