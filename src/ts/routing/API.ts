import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import bodyParser from "body-parser";
import { createBdObj, returnPartial, updateBdObj, getDbObj, getDbObjById, deleteDbObj, ECollection, filterResult } from "../utils/editBD";
import fs from "fs";

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
		// ----- chacked logs
		if (req.baseUrl === "/api/v1/provider"){
			fs.appendFileSync("log.txt", `\n${JSON.stringify(req.body)}`);
			fs.appendFileSync("log.txt", `\n${JSON.stringify(req.baseUrl)}`);
			fs.appendFileSync("req.baseUrl.txt", `\n${JSON.stringify(req.baseUrl)}`);
			fs.appendFileSync("req.originalUrl.txt", `\n${JSON.stringify(req.originalUrl)}`);
			fs.appendFileSync("req.url.txt", `\n${JSON.stringify(req.baseUrl)}`);
			fs.appendFileSync("req.params.txt", `\n${JSON.stringify(req.params)}`);
			fs.appendFileSync("req.headers.txt", `\n${JSON.stringify(req.headers)}`);
			// console.log(req.baseUrl,     "req.baseUrl");
			// console.log(req.originalUrl, "req.baseUrl");--
			// console.log(req.url,         "req.url");
			// console.log(req.params,      "params");
			// console.log(req.headers,     "req.headers");
			// let obj = {
			// 	listID : "idn347723483479203874",
			// 	list : [
			// 		"moovi1.mp4", "ms.mp4", "play.mp4", "instore.mp4"
			// 	]
			// }
			// res.end(JSON.stringify(obj));
			// fs.appendFileSync("log.json", `\n${JSON.stringify(req.body)}`);
		}
		getDbObj(model).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));

	});

	router.get("/:id", (req: Request, res: Response): void => {
		filterResult(model,  req.params.id, req.url).then((r: unknown) => res.end(JSON.stringify(r)))
		// returnPartial(model, req.params.id, req.url)
		// .then((r: unknown) => {

		// 	if (r !== null) res.end(JSON.stringify(r));

		// }).catch(errorHandler.bind(null, res)).then(() => {

		// 	getDbObjById(model, req.params.id)
		// 	.then((r: unknown) => res.end(JSON.stringify(r)))
		// 	.catch(errorHandler.bind(null, res));

		// });
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
