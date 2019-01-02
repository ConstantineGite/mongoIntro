import mongoose, { Document, Schema } from "mongoose";

interface ICampaignSchema extends Document {
	name: string;
}

const campaingnSchema: Schema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		default: "compain name"
	},
	autor: {
		type : String,
		required: true,
		default: "autor name"
	},
	duration : {
		type:  String,
		required: true,
		default: "20.20"
	},
	numberHits : {
		type: String,
		required: true,
		default: "20.20"
	},
	validStart : {
		type: String,
		required: true,
		default: "18:55"
	},
	validEnd : {
		type: String,
		required: true,
		default: "20:20"
	},
	timeStart : {
		type: String,
		required: true,
		default: "15:20"
	},
	timeEnd : {
		type: String,
		required: true,
		default: "22:30"
	},
	dayWeek : {
		type: Array,
		required: true,
		default: [
			"mon", "tue", "wen"
		]
	},
	groups: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "groups"
	}],
	rates: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "rates"
	}],
	content: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "compaign"
	}],
	placements : {
		type: mongoose.Schema.Types.ObjectId,
		ref: "placements"
	}
});

export default mongoose.model<ICampaignSchema>("campaigns", campaingnSchema);
