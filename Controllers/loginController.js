var User = require("../Schemas/userSchema");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).populate("role");
    console.log(user);
    const token = jwt.sign(
      {
        email: user.email,
        role: user.role.title,
      },
      "secret123",
      {
        expiresIn: 1200,
      }
    );
    return res
      .status(200)
      .json({ status: true, data: user, accessToken: token });
  } catch (error) {
    return res.status(500).json({ status: false, error: error });
  }
};
