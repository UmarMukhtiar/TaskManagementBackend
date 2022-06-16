var Task = require("../Schemas/taskSchema");

exports.getAllTasks = (req, res) => {
  Task.find({}, (error, tasks) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: tasks });
    }
  }).populate(["addedBy", "assignedTo", "status"]);
};

exports.getTaskById = (req, res) => {
  Task.findById({ _id: req.params.id }, (error, task) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: task });
    }
  }).populate(["addedBy", "assignedTo", "status"]);
};

exports.getTaskByAdder = (req, res) => {
  Task.find({ addedBy: req.params.id }, (error, task) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: task });
    }
  }).populate(["addedBy", "assignedTo", "status"]);
};

exports.getTaskByAssigned = (req, res) => {
  Task.find({ assignedTo: req.params.id }, (error, task) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: task });
    }
  }).populate(["addedBy", "assignedTo", "status"]);
};

exports.addTask = (req, res) => {
  var newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    addedBy: req.body.addedBy,
    assignedTo: req.body.assignedTo,
    dueDate: req.body.dueDate,
  });

  newTask.save((err) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(200).json({ status: true });
    }
  });
};

exports.updateTask = (req, res) => {
  Task.findById({ _id: req.body.id }, (err, task) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      task.title = req.body.title;
      task.description = req.body.description;
      task.status = req.body.status;
      task.dueDate = req.body.dueDate;

      task.save((err, task) => {
        if (err) {
          res
            .status(500)
            .setHeader("Access-Control-Allow-Origin", "*")
            .json(err);
          return;
        } else {
          res
            .status(200)
            .setHeader("Access-Control-Allow-Origin", "*")
            .json({ status: true, task: task });
        }
      });
    }
  });
};

exports.deleteTask = (req, res) => {
  Task.findByIdAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      res
        .status(200)
        .setHeader("Access-Control-Allow-Origin", "*")
        .json({ status: true });
    }
  });
};
