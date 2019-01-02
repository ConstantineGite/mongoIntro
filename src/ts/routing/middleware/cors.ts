import { Response, Request, NextFunction } from "express";
import { userInfo } from "os";

const _SUCCESS = 200;

export const cors = (req: Request, res: Response, next: NextFunction): void => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT, DELETE, POST, GET, OPTIONS");
	next();
};

export const corb = (req: Request, res: Response): void => {
	res.status(_SUCCESS);
	res.end();
};
