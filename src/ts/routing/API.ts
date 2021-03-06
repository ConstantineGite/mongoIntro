import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import bodyParser from "body-parser";
import { createBdObj, returnPartial, updateBdObj, getDbObj, getDbObjById, deleteDbObj, ECollection, filterResult } from "../utils/editBD";
import { pagination } from "../utils/servisesDB";
import fs from "fs";
import url from "url";

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
		const paramUrl = url.parse(req.url, {parseQueryString: true}).query;
		if (req.baseUrl === "/api/v1/provider") {
			const r = { name : req.query.viewer };
			//TEST COLECT PLACEMENT FUNCTION;
			const TEST = {
				name: "play1",
				playlist : [
					"snikers.mp4",
					"airoport.mp4",
					"x-man-trailer.mp4"
				]
			}
			createBdObj(model, r).then(() => res.end(JSON.stringify(TEST))).catch(errorHandler.bind(null, res));
		} else if(paramUrl.lim === "y") {
			pagination(allModels,  req.params.id, paramUrl).then((r: unknown) => res.end(JSON.stringify(r)));
		}
		getDbObj(model).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
		//console.log(req.url, "req.url");
		//filterResult(allModels,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)));
	});

	router.get("/:id", (req: Request, res: Response): void => {
		//filterResult(allModels,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)));
		const paramUrl = url.parse(req.url, {parseQueryString: true}).query;
		console.log(req.baseUrl, "paramUrl");
		returnPartial(model, req.params.id, req.url)
		.then((r: unknown) => {

			if (r !== null) res.end(JSON.stringify(r));

		}).catch(errorHandler.bind(null, res)).then(() => {

			getDbObjById(model, req.params.id)
			.then((r: unknown) => res.end(JSON.stringify(r)))
			.catch(errorHandler.bind(null, res));

		});
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
