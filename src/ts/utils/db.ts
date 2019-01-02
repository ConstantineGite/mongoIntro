import mongoose, { Mongoose } from "mongoose";
mongoose.Promise = Promise;

export enum ECollection {
	USERS     =  "users",
	ROLES     =  "roles",
	GROUPS    =  "groups",
	PROVIDER  =  "provider",
	CAMPAIGNS  =  "campaigns",
	CONSTANT  =  "constant",
	CONTENT   =  "content",
	PLACEMENTS =  "placements",
	RATES 	  =  "rates",
	ACTIVITY  =	 "activity"

}

export default {
	connect: (): Promise<Mongoose> => mongoose.connect(`mongodb://localhost/mongo-intro`, { useNewUrlParser: true }),
	disconnect: (): Promise<void> => mongoose.disconnect()
};
