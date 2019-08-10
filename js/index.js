/*
* @Author: SunShine
* @Date:   2019-08-04 10:36:51
* @Last Modified by:   SunShine
* @Last Modified time: 2019-08-04 12:49:51
*/
const path = require("path");
const express = require("express");
const template = require("art-template");
const add = express();
let data = require(path.join(__dirname + "cd..json/data.josn"));
app.set("views", path.join(__dirname, "../art"));
app.set("view engine", "art");
app.engine("art", "require-art-template");
app.get("/index", (req, res) => {
	res.render("index", data);
});
app.listen(3000,() => {
	console.log("running...");
})
