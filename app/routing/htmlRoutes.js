// Dependencies
var path = require("path");
// Routing
module.exports = function(app) {
  app.get(
    "/survey",
    (req, res) => res.sendFile(path.join(__dirname, "../public/survey.html"))
    // console.log(__dirname);
  );
  // send all non-survey url requests home
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/home.html"))
  );

  // app.get(
  //   "/",
  //   function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/home.html"));
  //   }
  // console.log(__dirname);
  // );
};
