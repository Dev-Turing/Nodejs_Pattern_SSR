import app from "./App";

const port: number = 3000;

app.listen(port, () => {
	return console.log(`server is listening on ${port}`);
});
