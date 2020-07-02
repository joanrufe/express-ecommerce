const { Router } = require("express");
const user = require("./controllers/user");
const jwt = require('jsonwebtoken');
const protectedRoutes = Router(); 


// User routes
protectedRoutes.use((req, res, next) => {
  try{
    const auth = req.headers['authorization'];
    const token = auth.replace('Bearer ','');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {      
      if (err) {
        return res.json({ msg: 'INVALID_TOKEN' });
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  } catch(err) {
    res.send({ 
        msg: 'NO_TOKEN_PROVIDED.' 
    });
  }
});

protectedRoutes.get("/users", user.getAll);
protectedRoutes.get("/users/:id", user.getById)
protectedRoutes.post("/users", user.create);
protectedRoutes.patch("/users/:id", user.update)
protectedRoutes.delete("/users/:id", user.delete);

module.exports = protectedRoutes;