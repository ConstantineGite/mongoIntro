import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Provider from "../models/provider";
import { populations, pagination } from "../utils/servisesDB";

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
	console.log(param, "param");
	if (param[0] === "") param = [];
	const rValue = Db.model(collection, _SCHEMAS[collection]).find({ _id }, param);
	return 	(param.length === 0) ? null : rValue;
};

export const filterResult = async (collection: ECollection, _id: string, fields: string): Promise< object | null> => {
	const path = fields.replace(/%2B/g, ":").split("%2F");
	path.shift();
	const param = path.map((elem: string, i: number) => {
		const el 	= elem.split(":");
		const obj 	= {};
		obj[el[0]] 	= el[1];
		return obj;
	});
	//return Db.model(collection, _SCHEMAS[collection]).find({$and: param});
	//return populations(collection, _id, fields);
	//return pagination(collection, _id, fields);
};