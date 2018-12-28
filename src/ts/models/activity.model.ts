import mongoose, { Document, Schema } from "mongoose";

interface IActivitySchema extends Document {
	name: string;
}

const activitySchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: "lorem ipsum dolor"
	},
	autor: {
		type : String,
		required: true,
		default: "lorem ipsum dolor"
	},
	chapter: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "campaign"
	},
	time: {
		type: Object,
		required: true,
		default: {
			time: "10:20",
			date: "28:12"
		}
	},
	ip: {
		type: String,
		required: true,
		default: "10.10.10.10"
	},
	activity: {
		type: String,
		required: true,
		default: "active"
	},
	section: {
		type: String,
		required: true,
		default: "section"
	}
});

export default mongoose.model<IActivitySchema>("activity", activitySchema);
