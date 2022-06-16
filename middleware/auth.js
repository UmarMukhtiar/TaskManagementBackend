const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if(!token){
        return res
          .status(400)
          .json({ status: false, error: "Token is required!" });
    }
    jwt.verify(token, "secret123", (err, authData) => {
      console.log(authData);
      if (!err) {
        req.localRole = authData.role;
        return next();
      } else {
        return res
          .status(400)
          .json({ status: false, error: "Sessios Expired!" });
      }
    });
  } catch {
    return res.status(400).json({ status: false, error: "An error occured!" });
  }
};
