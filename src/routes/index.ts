import * as express from "express";
// @ts-ignore
import * as cookieParser from "cookie-parser";
// @ts-ignore
import index from "../controllers/index.ts";

class Index {
	public app: express.Application;
	public router: express.Router;

	constructor() {
		this.app = express();
		this.router = express.Router();
		this.config();
		this.route();
	}

	private config(): void {
		this.app.use(cookieParser());
	}

	private route(): void {
		//[GET] [get home page]
		this.router.get("/", new index().getDefault);

		//[POST] [post url check]
		this.router.post("/", new index().postDefault);
	}
}

export default new Index().router;
