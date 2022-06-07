var { Schema, model } = require("mongoose");

var statusSchema = Schema({
  name: { type: String },
  title: { type: String },
});

module.exports = model("Status", statusSchema);
