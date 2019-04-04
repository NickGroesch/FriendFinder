// we need to connect to the database if we're gonna save and evaluate data
var mysql= require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "friendFinder_db"
  })
//Friend Finder rhetorically asks, what good is a connection if you don't connect?
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Routing
module.exports = function(app) {
  app.get("/api/friends", (req, res) =>
    // send the friends to the user
  );
  app.post("/api/friends", (req, res) =>
    // take and save the user's survey

    // evaluate the survey to show user the best friend(s)
  );
};