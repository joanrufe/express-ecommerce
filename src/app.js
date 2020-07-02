const express = require("express");
const mongoose = require("mongoose");
const publicRoutes = require("./publicRoutes");
const protectedRoutes = require("./protectedRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", protectedRoutes);
app.use("/", publicRoutes);


app.listen(process.env.PORT, () => {
  console.log("Server has started!");
});

const MongoURL = process.env.MONGO_DB_URL;

mongoose.set('useCreateIndex', true);
mongoose.connect(
  MongoURL,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

module.exports = app;
