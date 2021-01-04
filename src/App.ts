import { config } from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routers();
	}

	private config(): void {
		//use dotenv
		config();
		// use read data from body
		this.app.use(bodyParser.urlencoded({ extended: false }));
		//show get request morgan
		this.app.use(morgan("dev"));
	}

	private routers(): void {
		this.app.get("/", (res, rep) => {
			rep.send("<h1>Hello World</h1>");
		});
	}
}

export default new App().app;
