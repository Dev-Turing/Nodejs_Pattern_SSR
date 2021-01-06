import { config } from "dotenv";
import * as express from "express";
import * as hbs from "express-handlebars";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as path from "path";

// @ts-ignore
import index from "./routes/index.ts";

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routers();
	}

	private _handlerStatic(): string {
		let paths: string = path.join(__dirname);
		return `${paths.substring(0, paths.length - 4)}/public`;
	}

	private config(): void {
		//use dotenv
		config();

		//static file config
		console.log(this._handlerStatic());
		this.app.use(express.static(this._handlerStatic()));

		// use read data from body
		this.app.use(bodyParser.urlencoded({ extended: false }));

		//show get request morgan
		this.app.use(morgan("dev"));

		//use template engine handerbars
		const _hbs: object = { defaultlayout: "main", extname: ".hbs" };
		this.app.engine(".hbs", hbs(_hbs));
		this.app.set("view engine", "hbs");
		this.app.set("views", path.join(__dirname, "/views"));
	}

	private routers(): void {
		this.app.use("/", index);
	}
}

export default new App().app;
