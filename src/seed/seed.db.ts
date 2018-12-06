import { connect, disconnect } from "./../ts/utils/db";

const User = require("./../ts/models/user.model");
const Role = require("./../ts/models/role.model");
import { Priviligies } from "../ts/data/const";

const find = async (role) => {
	//const role = await Role.findOneAndUpdate(role);
	if (!role) {
		console.log(role, "rolee----->");
	}

	Role.create({
		name: "Role for test",
		priviligies: [
			{ action: Priviligies.USER_MANAGEMENT, value: [ 0, 1, 1, 0 ] }, // 0110
			{ action: Priviligies.ROLE_MANAGEMENT, value: [ 0, 1, 1, 0 ] }
		]
	});
};

// const find = async (login) => {
// 		//console.log(login, "<----- first fild ------>");
// 	const user = await User.findOneAndUpdate(login);
// 	if (!user) {
// 		console.log(`User ${login} not exist`);
// 		await create(login);
// 		await find(login);
// 		return;
// 	}
// 	//console.log("Vasya найден");
// 	//console.log(user);
// 	//user.visitingAdress = "user1 user1 user1 user1 user1";

// 	user.firstName  	= 	 "Tom";
// 	user.secondName 	= 	 "Toizer";
// 	user.email 			= 	 "user@rambler.ru" ;
// 	user.roles 			=	 [ { action: "USER_MANAGEMENT"}];
// 	user.groop      	= 	 [{grup: "grup1"}, {grup: "grup2"}, {grup: "grup3"}, {grup: "grup4"}];
// 	console.log(user.roles, "<---user secondName");
// 	await user.save();
// 	//console.log(user);
// };

// const create = async (login) => {
// 	//console.log(`---create ${login}`);
// 	//console.log(login, "login");
// 	//return await User.create({ login, email : "user@rambler.ru" });
// };

// const deleteByName = async (login) => {
// 	//console.log(`---delete ${name}`);
// 	//return await User.findOneAndDelete({ name });
// };

connect()
	.then(() => {
		console.log("---Connection to MongoDB is established");
	})
	.then(() => {
		console.log(Role, "Role");
		Role.find({}).then(() => {
			console.log("done");
		});
		//deleteByName("Vasya");
	})
	//.then(() => find("Vasya"))
	.then(disconnect)
	.catch((err) => {
		console.log(err);
	});

// //----------------------------------------------------------------------------------------------

// const createElement = async (colectins, elementUpdate, newValue) => {
// 	colectins.elementUpdate = newValue;
// 	//console.log(colectins, elementUpdate, newValue, "colectins, elementUpdate, newValue");
// }

// elementUpdate(User, "login", "newValue");
