// Dependencies
var path = require("path");
// Routing
module.exports = function(app) {
  app.get("/survey", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  );
  // send all non-survey url requests home
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/home.html"))
  );
};
