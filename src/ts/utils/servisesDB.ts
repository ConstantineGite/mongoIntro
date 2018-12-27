import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Provider from "../models/provider";
import { string } from "prop-types";

export { ECollection };

const _SCHEMAS = [Users, Roles, Groups, Provider];

export const  populations = async (collection: ECollection, id: string, fields: string): Promise< object | null> => {
	const  rValue = Users.find({ _id: id }).populate({ path: "roles", select: "priviligies", model: Roles });
	return rValue;
};

export const  pagination = async (collection: ECollection, id: string, fields: string): Promise< object | null> => {
	const pageNo = fields.page;
	const size = fields.size;
	const query = {};
	const defaultParam = {
		pageNo : 0,
		size : 20
	}
	if (size === undefined) size = defaultParam.size;
	if (pageNo === undefined) pageNo = defaultParam.pageNo;
	//if(pageNo < 0 || pageNo === 0) {}
	query.skip =  size * (pageNo - 1);
	query.limit = parseInt(size);
	return  Db.model(collection, _SCHEMAS[collection]).find({},{},query)
};