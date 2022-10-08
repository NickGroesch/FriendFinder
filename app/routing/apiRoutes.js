// we need to connect to the database if we're gonna save and evaluate data
var mysql = require("mysql");
// //Friend Finder rhetorically asks, what good is a connection if you don't connect?
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: "ff_db"
  });
}
console.log("connected to mysql");

// // Routing
module.exports = function (app) {
  // get route displays all profiles
  app.get("/api/friends", (req, res) =>
    connection.query("select * from profiles", (err, sult) => res.json(sult))
  );

  // post route handles friend matching and database insertion
  app.post("/api/friends", (req, res) => {
    var surveyUser = req.body;
    var userScore = surveyUser.scores.join("");
    // this array will hold all of the potential friend objects, and when we compare scores we will add a property to sort them
    // (some of the code below is not dry because I had been trying an object of objects but settled on an array of objects for the sort)
    var potentialFriends = [];
    connection.query("select * from profiles", (err, sult) => {
      // push in all the friends from the database
      sult.forEach((v, i) => potentialFriends.push(v));
      for (prop in potentialFriends) {
        var difference = 0;
        var compScore = potentialFriends[prop].scores.split(",").join("");
        for (i = 0; i < compScore.length; i++) {
          difference += Math.abs(
            parseInt(compScore[i]) - parseInt(userScore[i])
          );
        }
        potentialFriends[prop].differential = difference;
      }
      sortedFriends = [];
      sortedFriends = potentialFriends.sort((a, b) => {
        return a.differential - b.differential;
      });
      // respond to the page with friends ordered by compatibility
      res.json(sortedFriends);
      // now that the profiles have been assessed we will add the new user to database
      connection.query(
        "Insert into profiles (name, image, scores) values (?,?,?)",
        [req.body.name, req.body.image, req.body.scores.toString()]
      );
    });
  });
};
