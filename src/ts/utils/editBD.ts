import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Provider from "../models/provider";
import { test } from "../utils/servisesDB";
//import { string } from "prop-types";

export { ECollection };

const _SCHEMAS = [Users, Roles, Groups, Provider];

export const createBdObj = async (collection: ECollection, data: Document): Promise<void> => {
	Db.model(collection, _SCHEMAS[collection]).create(data);
};

export const updateBdObj = async (collection: ECollection, data: Document): Promise<Db.Document | null> => {
	const { _id, ...rest } = data;
	return Db.model(collection, _SCHEMAS[collection]).findOneAndUpdate({ _id }, rest).exec();
};

export const getDbObj = async (collection: ECollection): Promise<Document[]> =>
	Db.model(collection, _SCHEMAS[collection]).find({});

export const getDbObjById = async (collection: ECollection, _id: string): Promise<Document | null> =>
	Db.model(collection, _SCHEMAS[collection]).findById(_id);

export const deleteDbObj = async (collection: ECollection, _id: string): Promise<void> => {
	Db.model(collection, _SCHEMAS[collection]).findOneAndDelete({ _id }).exec();
};

export const returnPartial = async (collection: ECollection, _id: string, fields: string): Promise< object | null> => {
	let param  = fields.split("%2F");
	param.shift();
	if (param[0] === "") param = [];
	const rValue = Db.model(collection, _SCHEMAS[collection]).find({ _id }, param);
	return 	(param.length === 0) ? null : rValue;
};

export const filterResult = async (collection: ECollection, _id: string, fields: string): Promise< object | null> => {
	const a = "users";
	const rValue = Roles.find({ _id }).populate({ path: "roles", select: "priviligies", model: Roles });
	//console.log(test, "\-\*|test|*/-/");
	// console.log(rValue);
	// console.log(_SCHEMAS[a], 	"------USERS----------->");
	// console.log(colection["users", "colection -------> -------> ---------->");
	// const testValue = Db.model("user", User).find({ _id });
	// console.log(rValue, "----rValue--->");
	// console.log(_SCHEMAS, "our _SCHEMAS --->");
	return test();
};