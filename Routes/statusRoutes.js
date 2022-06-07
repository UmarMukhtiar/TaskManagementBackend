var router = require("express").Router();
var StatusController = require("../Controllers/statusController");

router.get("/", StatusController.getAllStatus);

router.post("/", StatusController.addStatus);

router.put("/", StatusController.updateStatus);

router.delete("/", StatusController.deleteStatus);

module.exports = router;