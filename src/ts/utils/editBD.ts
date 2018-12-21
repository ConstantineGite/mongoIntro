import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Provider from "../models/provider";

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

export const returnPartial = async (collection: ECollection, _id: string, fields: string ): Promise< object | null> => {
	let param  = fields.split("%2F");
	param.shift();
	if (param[0] === "") param = [];
	const rValue = Db.model(collection, _SCHEMAS[collection]).find({ _id }, param);
	return 	(param.length === 0) ? null : rValue;
};

export const filterResult = async (collection: ECollection, _id: string, fields: string): Promise<object | null> => {
	// const action = (fields.split(/\?(.*?)\%/)[1] !== null) ? fields.split(/\?(.*?)\%/)[1] : null;
	const param  = fields.split("%2F");
	const rValue = Db.model(collection, _SCHEMAS[collection]).find();
	.populate("Roles")
	.exec()
	//  let m =  Db.model(collection, _SCHEMAS[collection]);
	//  param.shift();
	//  console.log(param, "|---|-------param-------|---|>");
	//  const story = m.findOne({ userName: "user555" }).populate( Roles, { "roles" : _id} ).exec(function(error, bands) {
	// 	console.log("method worck");
	//  });
	return 	rValue;
};