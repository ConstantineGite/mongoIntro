import mongoose, { Mongoose } from "mongoose";
mongoose.Promise = Promise;

export default {
	connect: (): Promise<Mongoose> => mongoose.connect(`mongodb://localhost/mongo-intro`, { useNewUrlParser: true }),
	disconnect: (): Promise<void> => mongoose.disconnect()
};
