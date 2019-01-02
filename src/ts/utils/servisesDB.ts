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
import { string } from "prop-types";

export { ECollection };

const _SCHEMAS = [Users, Roles, Groups,  Activity, Campaigns, Constant, Content, Placements, Rates];

export const  populations = async (collection: Document, id: string, fields: string): Promise< object | null> => {
	const  rValue = collection.populate({ path: "roles", select: "priviligies", model: Roles });
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