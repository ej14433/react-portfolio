const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
app.listen(port);
app.use(bodyParser.json());

// Serve static assets for production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
	// Set static folder
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build/index.html"));
	});
}
