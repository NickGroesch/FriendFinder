// Dependencies
// var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// get routes from the routing files
require("./app/routing/apiRoutes.js")(app);
// it's helpful for me to remember both ways to set up the app routes
var htmlroutes = require("./app/routing/htmlRoutes");
htmlroutes(app);
// set the listener
app.listen(PORT, "0.0.0.0", () => {
  console.log("Friend Finder listening on port " + PORT);
  // console.log(app);
});
