var { Schema, model } = require("mongoose");

var userSchema = Schema({
  firstName: { type: String },
  lastName: { type: String },
  designation: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: Schema.Types.ObjectId, ref: "Role" },
  isActive: { type: Boolean },
});

module.exports = model("User", userSchema);
