import mongoose, { Document, Schema } from "mongoose";

interface IPlacementSchema extends Document {
	name: string;
}

const placementSchema: Schema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		default: "placement_value"

	},
	id : {
		type: String,
		required: true,
		default: "placement_id"
	},
	pricePerSecond : {
		type: String,
		required: true,
		default: "test"

	},
	type : {
		type: String,
		required: true,
		default: "test"
	},
	resolution : {
		type: String,
		required: true,
		default: "test"
	},
	rateMargin : {
		type: String,
		required: true,
		default: "test"
	},
	description : {
		type: String,
		required: true,
		default: "test"
	},
	groups : {
		type: mongoose.Schema.Types.ObjectId,
		ref: "groups"
	},
	rates : {
		type: mongoose.Schema.Types.ObjectId,
		ref: "rates"
	}
});

export default mongoose.model<IPlacementSchema>("placement", placementSchema);
