const { connect, disconnect } = require("./utils/db");

const User = require("./models/user.model");

const find = async (name) => {
	const user = await User.findOneAndUpdate({ name }, { age : 47 });
	if (!user) {
		console.log(`User ${name} not exist`);
		await create(name);
		await find(name);
		return;
	}
	console.log("Vasya найден");
	console.log(user);
	user.age = 21;
	await user.save();
	console.log(user)
};

const create = async (name) => {
	console.log(`---create ${name}`);
	return await User.create({ name, age : 5  });
};

const deleteByName = async (name) => {
	console.log(`---delete ${name}`);
	return await User.findOneAndDelete({ name });
};

connect()
	.then(() => {
		console.log("---Connection to MongoDB is established");
	})
	.then(() => {
		deleteByName("Vasya");
	})
	.then(() => find("Vasya"))
	.then(disconnect)
	.catch((err) => {
		console.log(err);
	});
