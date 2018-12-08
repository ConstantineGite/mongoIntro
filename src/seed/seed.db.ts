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

	// let linc =  User.findOne({ name: 'Role for test' }).populate('_id');
	// console.log(linc, "linck this linck linck this licnk");

	////-----------------------------------------------POPULATE_TEST-----------------------------------------------////

	// const user = await User.findOne({ login: "user test2" }).populate({ path: "roles", select: "priviligies", model: Role });
	// let a = user.roles;
	// console.log(a, "//---//user roles\\---\\");

						// User.create({
						// 	login: 		"user test4",
						// 	firstName: 	"user 1",
						// 	email: 		"awdawdawd",
						// 	roles:		"awdawdadawdadwad"
						// });
	// let U = await User.findOne({ login: "user test3" });
	// console.log(U, " user U ");

//------------------------------------------------------------------------------------------------------------------

							// const user_id = "5c0b91612636336f34d80531";
							// const role_id = "5c0a740f0d91e567e0c8764c";

							// User.findById({ _id: user_id }).then((userDoc: IUserSchema): Promise<{}> => {
							// 	userDoc.roles.push(role_id);
							// 	return userDoc.save();
							// }).then(() => {
							// 	console.log(`Role ${role_id} added for User ${user_id}`);
							// });

	// User.create({
	// 	login: 		"user test",
	// 	firstName: 	"user 1",
	// 	email: 		"awdawdawd",
	// 	roles:		user.roles
	// });
			// let U = await User.findOne({ login: "user test" });
			// console.log(U, "user U ");

	};

//--------------------------------------------------------------------------------------------------

////---------------------------------------------POPULATE TEST-------------------------------------------------/////
///---
	/*

	*/
///---

dbConnector.connect()
	.then(() => {
		console.log("---Connection to MongoDB is established---");
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
//--------------------------------------------------------------------------------------------------------------------------

[ запрос ] -=-=-=-> [ проверка прав на запрос ] -=-=-=-> [ выполняем запрос ];

[  запрос на список  юзеров ]  ----> "http://192.168.10.3:3000/api/v1/user/ ;
 
[  запрос на список ролей  ]   ---->  "http://192.168.10.3:3000/api/v1/role/ "

[  запрос на юзера ]           ---->  "http://192.168.10.3:3000/api/v1/user/ + [ID]";
 
[  запрос на роль  ]           ---->  "http://192.168.10.3:3000/api/v1/role/ + [ID]";