const { connect, disconnect } = require("./utils/db");

const User = require("./models/user.model");

const find = async (login) => {
	console.log(login, "----- first fild ------>");
	const user = await User.findOneAndUpdate(login);
	if (!user) {
		console.log(`User ${login} not exist`);
		await create(login);
		await find(login);
		return;
	}
	//console.log("Vasya найден");
	//console.log(user);
	user.firstName = "фамилия ------>";
	user.secondName = "goost ----> ----> ---->";
	user.email = "user@rambler.ru" ;
	//user.visitingAdress = "user1 user1 user1 user1 user1";
	user.roles = ["роль 1",  "роль 2", "роль 3"];
	console.log(user.telephone, "telephone");
	await user.save();
	console.log(user);
};

const create = async (login) => {
	//console.log(`---create ${login}`);
	//console.log(login, "login");
	//return await User.create({ login, email : "user@rambler.ru" });
};

const deleteByName = async (login) => {
	//console.log(`---delete ${name}`);
	//return await User.findOneAndDelete({ name });
};

connect()
	.then(() => {
		console.log("---Connection to MongoDB is established");
	})
	.then(() => {
		//deleteByName("Vasya");
	})
	.then(() => find("Vasya"))
	.then(disconnect)
	.catch((err) => {
		console.log(err);
	});
