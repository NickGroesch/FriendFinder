// we need to connect to the database if we're gonna save and evaluate data
var mysql = require("mysql");
// //Friend Finder rhetorically asks, what good is a connection if you don't connect?
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "ff_db"
});
console.log("connected to mysql");

// // Routing
module.exports = function(app) {
  // get route displays all profiles
  app.get("/api/friends", (req, res) =>
    connection.query("select * from profiles", (err, sult) => res.json(sult))
  );

  // post route handles friend matching and database insertion
  app.post("/api/friends", (req, res) => {
    var surveyUser = req.body;
    var userScore = surveyUser.scores.join("");
    console.log("userScore", userScore);

    // connection.query(
    //   "Insert into profiles (name, image, scores) values (?,?,?)",
    //   [req.body.name, req.body.image, req.body.scores.toString()]
    // );

    var potentialFriends = {};
    connection.query("select * from profiles", (err, sult) => {
      // console.log("all from profiles", sult);
      sult.forEach((v, i) => (potentialFriends[i] = v));
      console.log(potentialFriends);

      for (prop in potentialFriends) {
        var difference = 0;
        var compScore = potentialFriends[prop].scores.split(",").join("");
        console.log("compScore", compScore);
        for (i = 0; i < compScore.length; i++) {
          difference += Math.abs(
            parseInt(compScore[i]) - parseInt(userScore[i])
          );
        }
        potentialFriends[prop].differential = difference;
        console.log(potentialFriends[prop].differential);
      }
      console.log(potentialFriends);
      sortedFriends = [];
      // for (x in potentialFriends){
      sortedFriends = potentialFriends.sort((a, b) => {
        return a.differential - b.differential;
      });
      console.log(sortedFriends);
    });
  });
};

// sult.forEach(element, index => {
//   var dif = 0;
//   var scores = element.scores.split(",");
//   scores.forEach(item, i => {
//     if (item[i] != req.body.scores[i]) {
//       dif++;
//     }
//   });
//   potentialFriends[dif] = element;
//   });
// });
// object get keys loop in to sort difference (represented the  key)
// take and save the user's survey
// keep the code as csv string

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
