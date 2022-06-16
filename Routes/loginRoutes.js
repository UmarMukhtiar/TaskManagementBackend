var router = require("express").Router();
var LoginController = require("../Controllers/loginController");

router.get("/", LoginController.login);

module.exports = router;