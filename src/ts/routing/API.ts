import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import bodyParser from "body-parser";
import { createBdObj, returnPartial, updateBdObj, getDbObj, getDbObjById, deleteDbObj, ECollection, filterResult } from "../utils/editBD";
import fs from "fs";

const _NOT_ACCEPTABLE = 406;
const _OK = 200;
const _CREATED = 201;

export const routing = (model: ECollection, allModels: ECollection): Router => {
	const router = Router();

	router.use("/*", CRUD);
	router.use(bodyParser.json());

	router.post("/", (req: Request, res: Response): void => {
		createBdObj(model, req.body).then(() => res.sendStatus(_CREATED)).catch(errorHandler.bind(null, res));
	});

	router.get("/", (req: Request, res: Response): void => {
		if (req.baseUrl === "/api/v1/provider") {
			console.log("provider");
		}
		getDbObj(model).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));

	});

	router.get("/:id", (req: Request, res: Response): void => {
		filterResult(allModels,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)));
	});

	router.put("/*", (req: Request, res: Response): void => {
		updateBdObj(model, req.body).then(() => res.sendStatus(_OK)).catch(errorHandler.bind(null, res));
	});

	router.delete("/:id", (req: Request, res: Response): void => {
		deleteDbObj(model, req.params.id).then(() => res.sendStatus(_OK)).catch(errorHandler.bind(null, res));
	});

	router.all("/*", (req: Request, res: Response): void => {
		res.end(_NOT_ACCEPTABLE);
	});

	return router;
};
