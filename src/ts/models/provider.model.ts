import mongoose, { Document, Model, Schema } from "mongoose";

import { IPriviligies } from "./../data/const";

interface IProviderSchema extends Document {
	name: string;
	priviligies: IPriviligies[];
}

const providerSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: "testID3482384728934798789"
	}/*,
	priviligies: {
		type: [Object],
		required: true
	}*/
});

export default mongoose.model<IProviderSchema>("provider", providerSchema);
