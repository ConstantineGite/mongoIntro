import { Response, Request, NextFunction } from "express";

const _SUCCESS = 200;

export const cors = (req: Request, res: Response, next: NextFunction): void => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
};

export const corb = (req: Request, res: Response): void => {
	console.log(req.originalUrl);
	res.status(_SUCCESS);
	res.end();
};
