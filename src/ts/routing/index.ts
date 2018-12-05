import express, { Response, Request } from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello World!");
});

app.listen(3000, (): void => {
	console.log("Example app listening on port 3000!");
});