import mongoose, { Mongoose } from "mongoose";
mongoose.Promise = Promise;

export enum ECollection {
	USERS    =  "users",
	ROLES    =  "roles",
	PROVIDER =  "provider",
	GROUPS   =  "groups"
}

export default {
	connect: (): Promise<Mongoose> => mongoose.connect(`mongodb://localhost/mongo-intro`, { useNewUrlParser: true }),
	disconnect: (): Promise<void> => mongoose.disconnect()
};
