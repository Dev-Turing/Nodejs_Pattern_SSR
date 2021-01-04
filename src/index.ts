import app from "./App";

const port = 3000;

app.get("/", (res, rep) => {
	rep.write("<h1>Vu van Duy</h1>");
});

app.listen(port, () => {
	return console.log(`server is listening on ${port}`);
});
