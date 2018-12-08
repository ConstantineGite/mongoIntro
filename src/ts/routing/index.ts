import express, { Response, Request } from "express";
import { cors, corb } from "./middleware/cors";
import { router as User } from "./user";
import { router as Role } from "./roles";

const _API_V = "v1";
const _PORT = 3000;

const app = express();

app.use(cors);
app.head("/*", corb);

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello World!");
});

app.post(`/api/${_API_V}/mod`, (req: Request, res: Response): void => {
	//console.log(res, "----res---->");
	console.log(req, "----req--->");
	res.send("Hello World!");
});

app.use(`/api/${_API_V}/user`, User);
app.use(`/api/${_API_V}/role`, Role);

export const start = (): void => {
	app.listen(_PORT, "192.168.10.3", (): void => {
		console.log(`Example app listening on port ${_PORT}!`);
	});
};
