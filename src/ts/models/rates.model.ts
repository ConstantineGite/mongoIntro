import mongoose, { Document, Schema } from "mongoose";

interface IRatesSchema extends Document {
	name: string;
}

const ratesSchema: Schema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
		default: "Lorem ipsum dolor"
	},
	type : {
		type: String,
		required: true,
		default: "prime-time"
	},
	ratesInfluence : {
		type: Number,
		required: true,
		default: 1.5
	},
	validStart : {
		type: String,
		required: true,
		default: "28.12.2018"
	},
	validEnd : {
		type: String,
		required: true,
		default: "30.11.2018"
	},
	timeStart : {
		type: String,
		required: true,
		default: "10.10"
	},
	timeEnd : {
		type: String,
		required: true,
		default: "20.20"
	},
	dayWeek : {
		type: Array,
		required: true,
		default:  [
			"tue", "wen", "mon"
		]
	},
	placement : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "placment"
	}]
});

export default mongoose.model<IRatesSchema>("rates", ratesSchema);
