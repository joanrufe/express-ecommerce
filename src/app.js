const express = require("express");
const { connect } = require('mongoose');
const routes = require("./routes");
const bodyParser = require("body-parser") // new
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_DB_URL;
const app = express();

connect(url, {useNewUrlParser: true})
  .then(() => {
    app.use(bodyParser.json()); // new
    app.use("/api", routes); // new

    app.get('/', function(req, res) {
      res.send('Welcome');
    })

    app.listen(3000, () => {
      console.log("Server has started!");
    })
  });
module.exports = app;