import * as express from "express";
import axios from "axios";

export default class Index {
	// [GET]
	public getDefault(rep: express.Request, res: express.Response): void {
		res.render("home");
	}

	// [POST]
	async postDefault(
		rep: express.Request,
		res: express.Response
	): Promise<void> {
		const { api } = rep.body;
		let data: object = null;
		await axios
			.get(rep.body.api)
			.then((content) => {
				data = content.data;
			})
			.catch((err) => {
				res.cookie("api", 404);
			});
		if (!data) {
			return res.render("home", { data: "404 NOT FOUND" });
		}
		const _data: String = await JSON.stringify(data);
		if (_data.length > 0) {
			res.render("home", { data: _data.trim() });
		}
	}
}
