import express, { Response, Request } from "express";
import { cors, corb } from "./middleware/cors";
import { router as User } from "./user";
import { router as Role } from "./roles";
import bodyParser from "body-parser";

const _API_V = "v1";
const _PORT = 3000;

const app = express();

app.use(cors);
app.head("/*", corb);
//app.use(bodyParser.json()); // тут перепроверить 

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello World!");
});

// create obj || obj user || add rule chacket function;
		// app.post(`/api/${_API_V}/cr/:id`, (req: Request, res: Response): void => {
		// 	console.log(req.body);
		// 	console.log(req.url);
		// 	res.send("Hello World!");
		// });

		// // update obj || obj user
		// app.patch(`/api/${_API_V}/updt/:id`, (req: Request, res: Response): void => {
		// 	console.log(req.body);
		// 	res.send("Hello World!");
		// });

app.use(`/api/${_API_V}/user`, User);
app.use(`/api/${_API_V}/role`, Role);

export const start = (): void => {
	app.listen(_PORT, "192.168.10.3", (): void => {
		console.log(`Example app listening on port ${_PORT}!`);
	});
};
