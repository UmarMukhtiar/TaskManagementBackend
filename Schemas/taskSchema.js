var { Schema, model } = require("mongoose");

var taskSchema = Schema({
  title: { type: String },
  description: { type: String },
  status: { type: Schema.Types.ObjectId, ref: "Status" },
  completedDate: { type: Date, default: null },
  addedBy: { type: Schema.Types.ObjectId, ref: "User" },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
  isCompleted: { type: Boolean, default: null },
});

module.exports = model("Task", taskSchema);
