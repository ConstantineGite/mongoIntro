import { Router, Request, Response } from "express";
import CRUD, { errorHandler } from "./middleware/crud";
import Role from "../models/role.model";

const _NOT_ACCEPTABLE = 406;
export const router = Router();

router.use("/*", CRUD);

router.get("/", (req: Request, res: Response): void => {
	Role.find({}).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
});

router.get("/:id", (req: Request, res: Response): void => {
	const { id } = req.params;
	Role.findById(id).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
});

// router.post("/req", (req: Request, res: Response): void => {
// 	console.log(res, "response");
// 	console.log(req, "req");
// 	//const { id } = req.params;
// 	//Role.findById(id).then((r: unknown) => res.end(JSON.stringify(r))).catch(errorHandler.bind(null, res));
// });

// router.post("/", (req: Request, res: Response): void => {
// 	Role.create({ req }).catch(errorHandler.bind(null, res));
// });

// router.put("/", (req: Request, res: Response): void => {
// 	Role.create({ req }).catch(errorHandler.bind(null, res));
// });

// router.delete("/", (req: Request, res: Response): void => {
// 	Role.create({ req }).catch(errorHandler.bind(null, res));
// });

// router.all("/*", (req: Request, res: Response): void => {
// 	res.end(_NOT_ACCEPTABLE);
// });
