var { Schema, model } = require("mongoose");

var taskSchema = Schema({
  title: { type: String },
  description: { type: String },
  status: { type: Schema.Types.ObjectId, ref: "Status" },
  addedBy: { type: Schema.Types.ObjectId, ref: "User" },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
  dueDate: {type: Schema.Types.Number}
});

module.exports = model("Task", taskSchema);
