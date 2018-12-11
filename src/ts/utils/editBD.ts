import Db, { Document } from "mongoose";
import { ECollection } from "./db";
import User from "../models/user.model";
import Role from "../models/role.model";
import Group from "../models/group.model";

export { ECollection };

const _SCHEMAS = [User, Role, Group];

export const createBdObj = async (collection: ECollection, data: Document): Promise<void> => {
	Db.model(collection, _SCHEMAS[collection]).create(data);
};

export const updateBdObj = async (collection: ECollection, data: Document): Promise<void> => {
	const { _id, ...rest } = data;
	Db.model(collection, _SCHEMAS[collection]).findOneAndUpdate({ _id }, rest).exec();
};

export const getDbObj = async (collection: ECollection): Promise<Document[]> =>
	Db.model(collection, _SCHEMAS[collection]).find({});

export const getDbObjById = async (collection: ECollection, _id: string): Promise<Document | null> =>
	Db.model(collection, _SCHEMAS[collection]).findById(_id);

export const deleteDbObj = async (collection: ECollection, _id: string): Promise<void> => {
	Db.model(collection, _SCHEMAS[collection]).findOneAndDelete({ _id }).exec();
};
