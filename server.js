// Dependencies
var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// get routes from the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// set the listener
app.listen(PORT, () => {
  console.log("Friend Finder listening on port " + PORT);
});
