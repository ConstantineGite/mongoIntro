import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import bodyParser from "body-parser";
import { createBdObj, updateBdObj, getDbObj, getDbObjById, deleteDbObj, ECollection } from "../utils/editBD";

const _NOT_ACCEPTABLE = 406;
const _OK = 200;
const _CREATED = 201;

export const routing = (model: ECollection): Router => {
	const router = Router();

	router.use("/*", CRUD);
	router.use(bodyParser.json());

	router.post("/", (req: Request, res: Response): void => {
		createBdObj(model, req.body).then(() => res.sendStatus(_CREATED)).catch(errorHandler.bind(null, res));
	});

	router.get("/", (req: Request, res: Response): void => {
		getDbObj(model).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
	});

	router.get("/:id", (req: Request, res: Response): void => {
		getDbObjById(model, req.params.id)
			.then((r: unknown) => res.end(JSON.stringify(r)))
			.catch(errorHandler.bind(null, res));
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
