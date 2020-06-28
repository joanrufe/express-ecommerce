const { Router } = require("express");
const user = require("./controllers/user");
const router = Router();

// User routes
router.get("/users", user.getAll);
router.get("/users/:id", user.getById)
router.post("/users", user.create);
router.patch("/users/:id", user.update)
router.delete("/users/:id", user.delete);

module.exports = router;