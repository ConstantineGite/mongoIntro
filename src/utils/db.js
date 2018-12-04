const mongoose = require("mongoose");
mongoose.Promise = Promise;

const connect = () => {
	return mongoose.connect(`mongodb://localhost/mongo-intro`, { useNewUrlParser: true });
};

const disconnect = () => {
	return mongoose.disconnect();
};

module.exports = {
	connect,
	disconnect
};
