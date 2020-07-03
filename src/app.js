const express = require("express");
const mongoose = require("mongoose");
const publicRoutes = require("./publicRoutes");
const protectedRoutes = require("./protectedRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const ReactEngine =  require('react-engine');
const routes =  require('./public/routes.jsx');

dotenv.config();

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes,
  routesFilePath: join(__dirname, '/public/routes.jsx'),
  performanceCollector: (stats) => {
    console.log(stats);
  }
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', join(__dirname, '/public/views'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// expose public folder as static assets
app.use(express.static(join(__dirname, '/public')));

//app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", protectedRoutes);
app.use("/", publicRoutes);


app.use((err, req, res, next) => {
  console.error(err);

  // http://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).render(req.url);
  }
  else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).render('500.jsx', {
      err: {
        message: err.message,
        stack: err.stack
      }
    });
  }
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started!");
});

const MongoURL = process.env.MONGO_DB_URL;

mongoose.set('useCreateIndex', true);
mongoose.connect(
  MongoURL,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

module.exports = app;
