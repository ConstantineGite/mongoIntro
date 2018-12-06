import express, { Response, Request } from "express";
import { cors, corb } from "./middleware/cors";
import { router as User } from "./user";

const _API_V = "v1";
const _PORT = 3000;

const app = express();

app.use(cors);
app.head("/*", corb);

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello World!");
});

app.use(`/api/${_API_V}/user`, User);

export const start = (): void => {
	app.listen(_PORT, "192.168.10.3", (): void => {
		console.log(`Example app listening on port ${_PORT}!`);
	});
};
