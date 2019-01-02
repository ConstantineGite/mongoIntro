 

import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Activity from "../models/activity.model";
import Campaigns from "../models/campaign.model";
import Constant from "../models/constant.model";
import Content from "../models/content.model";
import Placements from "../models/placement.model";
import Rates from "../models/rates.model";
import { populations, pagination } from "../utils/servisesDB";

export { ECollection };

const _SCHEMAS = [Users, Roles, Groups, Activity, Campaigns, Constant, Content, Placements, Rates];

export const repeatCheck = (collection: ECollection, id: object): Promise => {
	return Placements.find({ id: id.id });
};

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
	const path = fields.replace(/%2B/g, ":").split("%2F");
	path.shift();
	const param = path.map((elem: string, i: number) => {
		const el 	= elem.split(":");
		const obj 	= {};
		obj[el[0]] 	= el[1];
		return obj;
	});
	return Db.model(collection, _SCHEMAS[collection]).find({ $and: param });
};

export const createPlaylist = async (collection: ECollection, _id: string, fields: string): Promise< object | null> => {
	const testID = "playerID_2312312939141934";
	const plasmentId = await Placements.find({ id: _id.id });
	console.log(plasmentId, "_id");
	//.then(() => {
	// 	console.log(plasmentId, "plasmentId");
	// })
	//const Campaign.find({}).populate({ path: "placament", select: "placament", model: Placements }); // Получаем кампании
	return plasmentId;

};
