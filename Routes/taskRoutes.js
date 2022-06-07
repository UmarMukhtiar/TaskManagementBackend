var router = require("express").Router();
var TaskController = require("../Controllers/taskController");

router.get("/", TaskController.getAllTasks);

router.get("/:id", TaskController.getTaskById);

router.get("/addedBy/:id", TaskController.getTaskByAdder);

router.get("/assignedTo/:id", TaskController.getTaskByAssigned);

router.post("/", TaskController.addTask);

router.put("/", TaskController.updateTask);

router.delete("/", TaskController.deleteTask);

module.exports = router;