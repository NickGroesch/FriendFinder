// we need to connect to the database if we're gonna save and evaluate data
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "friendFinder_db"
});
console.log("connected to mysql");

// //Friend Finder rhetorically asks, what good is a connection if you don't connect?
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

// // Routing
// module.exports = function(app) {
//   app.get("/api/friends", (req, res) =>
//     // get all profiles
//   );
//   app.post("/api/friends", (req, res) =>
//     // take and save the user's survey
//     // keep the code as csv string

//     // evaluate the survey to show user the best friend(s)
// function(evaluateMatch){
// const bestMatch={
//   name:"",
//   photo:"url",
//   friendDifference: 42
// }
// // for i loop over the friends{
//   // total difference=0
//   // currentfriend=friends[i]
//   //     for j loop over currentfriend.scores{
//     //      compare the userdata.scrores[j] with currentfriend.scores[j]
//     //        totaldifference +=  Math.abs(parseInt(userscore)-parseInt(friendscrore))
//   // if(totaldifference<=bestmatch.friendDifference){
// // bestMatch=currentFriend
//   // }
// // }
// return bestMatch
// }
//     // send the bestest match
//   );
// };
