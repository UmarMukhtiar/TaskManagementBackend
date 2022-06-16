const express = require("express");
var port = process.env.PORT || 3001;
var app = express();
var userRoutes = require("./Routes/userRoutes");
var taskRoutes = require("./Routes/taskRoutes");
var statusRoutes = require("./Routes/statusRoutes");
var roleRoutes = require("./Routes/roleRoutes");
var loginRoutes = require("./Routes/loginRoutes");
var bodyParser = require("body-parser");
var cors = require("cors");
const auth = require("./middleware/auth");
require("./Database/dbConnection");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/login", loginRoutes);
//app.use(auth);

app.listen(port, () => console.log("Backend running at port:", port));
