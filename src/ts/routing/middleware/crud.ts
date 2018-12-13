import { Request, Response, NextFunction } from "express";
import { priviligies } from "./../../data/const";

enum MethodCRUD {
	POST,
	GET,
	PUT,
	DELETE
}

const _FORBIDDEN = 403;
const _INTERNAL_SERVER_ERROR = 500;
const _NOT_VALIDATE_DATE = 415;

export const errorHandler = (res: Response, err: Error): void => {
	console.log(err.message);
	res.status(_NOT_VALIDATE_DATE);
	res.end(err);
};

export default (req: Request, res: Response, next: NextFunction): void => {
	try {
		if (priviligies[0].value[MethodCRUD[req.method]]) return next();
		res.status(_NOT_VALIDATE_DATE);
		res.end();
	} catch (err) {
		errorHandler(res, err);
	}
};
