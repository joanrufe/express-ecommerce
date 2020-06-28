const express = require("express");
const { connect } = require('mongoose');
const routes = require("./routes");
const bodyParser = require("body-parser") // new

const url = "mongodb://localhost/users";

connect(url, {useNewUrlParser: true})
  .then(() => {
    const app = express();
    app.use(bodyParser.json()); // new
    app.use("/api", routes); // new

    app.listen(3000, () => {
      console.log("Server has started!");
    })
  });
