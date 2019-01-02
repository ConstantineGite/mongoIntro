import express, { Response, Request } from "express";
import { ECollection } from "../utils/editBD";
import { cors, corb } from "./middleware/cors";
import { routing } from "./API";
import * as fs from "fs";

const _API_V = "v1";
const _PORT = 3000;

const app = express();

app.use(cors);
app.options("/*", corb);
app.use(express.static("./intarface/build/"));

app.get("/", (req: Request, res: Response): void => {
	const dataHTML = fs.readFileSync("./intarface/build/index.html");
	res.end(dataHTML);
});

for (const route in ECollection) {
	const path = route.toLowerCase();
	const collection = ECollection[route.toString()];
	app.use(`/api/${_API_V}/${path}`, routing(collection, ECollection[route.toString()]));
}

export const start = (): void => {
	app.listen(_PORT, "192.168.0.100", (): void => {
		console.log(`Example app listening on port ${_PORT}!`);
	});
};
