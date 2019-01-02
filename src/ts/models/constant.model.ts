import mongoose, { Document, Schema } from "mongoose";

interface IConstantSchema extends Document {
	name: string;
}

const constantSchema: Schema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		default: "name"
	}
});

export default mongoose.model<IConstantSchema>("constant", constantSchema);
