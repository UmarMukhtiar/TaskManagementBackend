var { Schema, model } = require("mongoose");

var roleSchema = Schema({
  name: { type: String },
  title: { type: String },
});

module.exports = model("Role", roleSchema);
