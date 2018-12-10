import mongoose, { Document, Schema } from "mongoose";

interface IGroupSchema extends Document {
	name: string;
}

const groupSchema: Schema = new mongoose.Schema({
	name : {
		type: String
	}
});

export default mongoose.model<IGroupSchema>("group", groupSchema);
