var router = require("express").Router();
var RoleController = require("../Controllers/roleController");

router.get("/", RoleController.addRole);

router.post("/", RoleController.addRole);

router.put("/", RoleController.updateRole);

router.delete("/", RoleController.deleteRole);

module.exports = router;