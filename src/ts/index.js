const { connect, disconnect } = require("./utils/db");

const User = require("./models/user.model");

const find = async (login) => {
		//console.log(login, "<----- first fild ------>");
	const user = await User.findOneAndUpdate(login);
	if (!user) {
		console.log(`User ${login} not exist`);
		await create(login);
		await find(login);
		return;
	}
	//console.log("Vasya найден");
	//console.log(user);
	//user.visitingAdress = "user1 user1 user1 user1 user1";

	user.firstName  	= 	 "фамилия ------>";
	user.secondName 	= 	 "goost ----> ----> ---->";
	user.email 			= 	 "user@rambler.ru" ;
	user.roles 			=	 [{user: "sdf"},   {user: "21dsad"},  {user: "asas"},   {user: "123123123"}];
	user.groop      	= 	 [{grup: "grup1"}, {grup: "grup2"}, {grup: "grup3"}, {grup: "grup4"}];
	console.log(user.roles, "<---user secondName");
	await user.save();
	//console.log(user);
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

// connect()
// 	.then(() => {
// 		console.log("---Connection to MongoDB is established");
// 	})
// 	.then(() => {
// 		//deleteByName("Vasya");
// 	})
// 	.then(() => find("Vasya"))
// 	.then(disconnect)
// 	.catch((err) => {
// 		console.log(err);
// 	});

//----------------------------------------------------------------------------------------------

const createElement = async (colectins, elementUpdate, newValue) => {
	colectins.elementUpdate = newValue;
	//console.log(colectins, elementUpdate, newValue, "colectins, elementUpdate, newValue");
}

elementUpdate(User, "login", "newValue");