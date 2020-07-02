const { Router } = require("express");
const user = require("./controllers/user");
const jwt = require('jsonwebtoken');
const publicRoutes = Router();

// auth route
publicRoutes.post('/auth', (req, res) => {
  if(req.body.user === "manolo" && req.body.password === "rastaman") {
    const payload = {
     check:  true
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
     expiresIn: 1440
    });
    res.json({
     msg: 'OK',
     token: token
    });
  } else {
      res.json({ msg: "INVALID_USER"})
  }
})

module.exports = publicRoutes;