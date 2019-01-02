import mongoose, { Document, Schema } from "mongoose";

interface IContentSchema extends Document {
	name: string;
}

const contentSchema: Schema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		default: "test"
	},
	type: {
		type : Object,
		required: true,
		default: [
			"profile",
			"image"
		]
	},
	duration : {
		type:  String,
		required: true,
		default: "20:20:20:20"
	},
	revision : {
		type:  Boolean,
		required: true,
		default: false
	},
	area: {
		type:  String,
		required: true,
		default: "area"
	},
	period : {
		type: Object,
		required: true,
		default: {
			time : "15:15",
			date : "28.12"
		}
	},
	// used : {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: ""
	// },
	updatet : {
		type: Object,
		required: true,
		default: {
			time : "15:15",
			date : "28.12"
		}
	},
	approved : {
		type: Boolean,
		required: true,
		default: false
	}
});

export default mongoose.model<IContentSchema>("content", contentSchema);
