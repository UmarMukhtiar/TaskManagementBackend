var Role = require("../Schemas/roleSchema");

exports.getAllRoles = (req, res) => {
  Role.find({}, (error, roles) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: roles });
    }
  });
};

exports.addRole = (req, res) => {
  var newRole = new Role({
    name: req.body.name,
    title: req.body.title,
  });

  newRole.save((err) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(200).json({ status: true });
    }
  });
};

exports.updateRole = (req, res) => {
  Role.findById({ _id: req.body.id }, (err, role) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      role.name = req.body.name;
      role.title = req.body.title;

      role.save((err, role) => {
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
            .json({ status: true, task: role });
        }
      });
    }
  });
};

exports.deleteRole = (req, res) => {
  Role.findByIdAndRemove({ _id: req.body.id }, (err) => {
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
