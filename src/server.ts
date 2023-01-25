import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db.connect";

dotenv.config();

const APP_PORT = process.env.PORT || 3003;

const app = express();

app.get("/", async (req: Request, res: Response) => {
	try {
		const result = await dbConnect.query("select * from pessoas p;");
		return res.status(200).json(result.rows);
	} catch (error) {
		console.log("Error =>", error);
	}
});

app.listen(APP_PORT, () => {
	console.log(
		`Server is running on the port ${APP_PORT}\nhttp://localhost:${APP_PORT}`
	);
});
