var Status = require("../Schemas/statusSchema");

exports.getAllStatus = (req, res) => {
  Status.find({}, (error, status) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: status });
    }
  });
};

exports.addStatus = (req, res) => {
  var newStatus = new Status({
    name: req.body.name,
    title: req.body.title,
  });

  newStatus.save((err) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(200).json({ status: true });
    }
  });
};

exports.updateStatus = (req, res) => {
  Status.findById({ _id: req.body.id }, (err, status) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      status.name = req.body.name;
      status.title = req.body.title;

      status.save((err, status) => {
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
            .json({ status: true, task: status });
        }
      });
    }
  });
};

exports.deleteStatus = (req, res) => {
  Status.findByIdAndRemove({ _id: req.body.id }, (err) => {
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
