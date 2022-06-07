var User = require("../Schemas/userSchema");

exports.getAllUsers = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      if (users.length > 0) {
        return res.status(200).json({ status: true, data: users });
      } else {
        return res.status(200).json({ status: true, data: null });
      }
    }
  }).populate("role");
};

exports.getUserById = (req, res) => {
  User.findById({ _id: req.params.id }, (error, user) => {
    if (error) {
      return res.status(500).json({ status: false, error: error });
    } else {
      return res.status(200).json({ status: true, data: user });
    }
  }).populate("role");
};

exports.addUser = (req, res) => {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    designation: req.body.designation,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    isActive: req.body.isActive,
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(200).json({ status: true });
    }
  });
};

exports.updateUser = (req, res) => {
  User.findById({ _id: req.body.id }, (err, user) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.designation = req.body.designation;
      user.email = req.body.email;
      user.password = req.body.password;
      user.role = req.body.role;
      user.isActive = req.body.isActive;

      user.save((err, user) => {
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
            .json({ status: true, user: user });
        }
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  User.findOne({ _id: req.body.id }, (err, user) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      user.isActive = false;

      user.save((err, user) => {
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
            .json({ status: true, user: user });
        }
      });
    }
  });
};
