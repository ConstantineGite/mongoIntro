import express, { Response, Request } from "express";
import { ECollection } from "../utils/editBD";
import { cors, corb } from "./middleware/cors";
import { routing } from "./API";

const _API_V = "v1";
const _PORT = 80;

const app = express();

app.use(cors);
app.options("/*", corb);

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello World!");
});

for (const route in ECollection) {
	const path = route.toLowerCase();
	const collection = ECollection[route.toString()];
	app.use(`/api/${_API_V}/${path}`, routing(collection));
}

export const start = (): void => {
	app.listen(_PORT, "185.233.117.46", (): void => {
		console.log(`Example app listening on port ${_PORT}!`);
	});
};
