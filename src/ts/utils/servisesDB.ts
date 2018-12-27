import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import Users from "../models/user.model";
import Roles from "../models/role.model";
import Groups from "../models/group.model";
import Provider from "../models/provider";

export { ECollection };

const _SCHEMAS = [Users, Roles, Groups, Provider];

export const  populations = async (collection: ECollection, id: string, fields: string): Promise< object | null> => {
	const  rValue = Users.find({ _id: id }).populate({ path: "roles", select: "priviligies", model: Roles });
	return rValue;
};
