import mongoose from "mongoose";

const { Schema }  = mongoose;

const groupSchema = new Schema({
	name : {
		type: String
	}
});

export default mongoose.model("group", groupSchema);
