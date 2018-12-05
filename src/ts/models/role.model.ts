import mongoose, { Document, Model, Schema } from "mongoose";

import { I_Priviligies } from "./../data/const";

interface I_Schema extends Document {
	name: String;
	priviligies: I_Priviligies[];
}

const RoleSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	priviligies: {
		type: [ Object ],
		required: true
	}
});

const mRole: Model<I_Schema> = mongoose.model<I_Schema>("role", RoleSchema);

export default mRole;