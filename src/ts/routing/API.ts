import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import bodyParser from "body-parser";
import {
	createBdObj,
	returnPartial,
	repeatCheck,
	updateBdObj,
	getDbObj,
	getDbObjById,
	deleteDbObj,
	ECollection,
	filterResult,
	createPlaylist
} from "../utils/editBD";
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
		const paramUrl = url.parse(req.url, { parseQueryString: true }).query;
		if (req.baseUrl === "/api/v1/placements") {
			let r = { id: req.query.viewer };
			if(r.id ===  undefined )  r = { id: "default name" };
			let playList = createPlaylist(allModels, r, paramUrl)
				//.then((r: unknown) => )
				.then((r: unknown) => res.end(JSON.stringify(r)))
				.then(() => {
					repeatCheck(model, r).then((r: unknown) => {
						if(!r[0]) createBdObj(model, r).catch(errorHandler.bind(null, res));
					});
						
					//createBdObj(model, r).catch(errorHandler.bind(null, res));
				})
				.catch(errorHandler.bind(null, res));
			// createBdObj(model, r).then(() => res.end(JSON.stringify(playList))).catch(errorHandler.bind(null, res));
		} else if (paramUrl.lim === "y") {
			pagination(allModels, req.params.id, paramUrl).then((r: unknown) => res.end(JSON.stringify(r)));
		} else {
			getDbObj(model).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
		}
		//console.log(req.url, "req.url");
		//filterResult(allModels,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)));
	});

	router.get("/:id", (req: Request, res: Response): void => {
		//filterResult(allModels,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)));
		const paramUrl = url.parse(req.url, { parseQueryString: true }).query;
		console.log(req.baseUrl, "paramUrl");
		returnPartial(model, req.params.id, req.url)
			.then((r: unknown) => {
				if (r !== null) res.end(JSON.stringify(r));
			})
			.catch(errorHandler.bind(null, res))
			.then(() => {
				getDbObjById(model, req.params.id).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
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
