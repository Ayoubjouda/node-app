require("dotenv").config();
const express = require("express");
const app = express();
const expresslayouts = require("express-ejs-layouts");
const indexRoutes = require("./routes/index.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to db"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayouts);
app.use(express.static("public"));
app.use("/", indexRoutes);
app.listen(4000);
