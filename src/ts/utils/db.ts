import mongoose, { Mongoose } from "mongoose";
mongoose.Promise = Promise;

export enum ECollection {
	USERS     =  "users",
	ROLES     =  "roles",
	GROUPS    =  "groups",
	PROVIDER  =  "provider",
	CAMPAIGN  =  "campaign",
	CONSTANT  =  "constant",
	CONTENT   =  "content",
	PLACEMENT =  "placement",
	RATES 	  =  "rates",
	ACTIVITY = "activity"

}

export default {
	connect: (): Promise<Mongoose> => mongoose.connect(`mongodb://localhost/mongo-intro`, { useNewUrlParser: true }),
	disconnect: (): Promise<void> => mongoose.disconnect()
};
