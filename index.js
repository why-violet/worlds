// # Server | Listen to web traffic
// Using [Express](https://expressjs.com/)

require("dotenv").config();

const express    = require("express");
const bodyParser = require("body-parser");

// ### Options
const port   = process.env.PORT || 8080;

const app = new express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// * Static Front End Files
app.use("/",     express.static(`${process.cwd()}/worlds/app`));

// * **Start listening to traffic**
app.listen(port, () => {
    console.log("Worlds...");
});