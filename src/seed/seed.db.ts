import dbConnector from "./../ts/utils/db";

import User, { IUserSchema } from "./../ts/models/user.model";
import Role from "./../ts/models/role.model";
import { Priviligies } from "../ts/data/const";

//const find = async () => {
//	Role.create({
//		name: "Role for test",
//		priviligies: [
//			{ action: Priviligies.USER_MANAGEMENT, value: [ 0, 1, 1, 0 ] }, // 0110
//			{ action: Priviligies.ROLE_MANAGEMENT, value: [ 0, 1, 1, 0 ] }
//		]
//	});
///	let role = await Role.findOne();
////////////////////////////////////////////////////////////////////////////////////

const find = async (): Promise<void> => {
	// User.create({
	// 	login : "user test",
	// 	firstName : "user 1",
	// 	email: "awdawdawd",
	// 	roles :
	// })
	//console.log(User.find({}).populate().login, "User --- == = == - - - == == -");

	//let linc =  User.findOne({ name: 'Role for test' }).populate('_id');
	//console.log(linc, "linck this linck linck this licnk");
	const user = await User.findOne({ login: "Vasya" })
		.populate({ path: "roles", select: "priviligies", model: Role });
	console.log(user, " user ---> ----> ----> ");

	const user_id = "";
	const role_id = "";

	User.findById({ _id: user_id }).then((userDoc: IUserSchema): Promise<{}> => {
		userDoc.roles.push(role_id)
		return userDoc.save();
	}).then(() => {
		console.log(`Role ${role_id} added for User ${user_id}`);
	});
};

dbConnector
	.connect()
	.then(() => {
		console.log("---Connection to MongoDB is established");
	})
	.then(() => {
		console.log("statrt conect function");
		return find();
		//deleteByName("Vasya");
	})
	.then(() => {
		// console.log(find(), "user 2");
	})
	.then(dbConnector.disconnect)
	.catch((err) => {
		console.log(err);
	});
