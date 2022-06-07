var router = require("express").Router();
var UserController = require("../Controllers/userController");

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getUserById);

router.post("/", UserController.addUser);

router.put("/", UserController.updateUser);

router.delete("/", UserController.deleteUser);

module.exports = router;