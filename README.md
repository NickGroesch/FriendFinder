# Blackout Friend Finder - Node and Express Servers

### Synopsis

In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app, but for **video game play-dates**, since there is no time for video games in boot camp. This was my first full-stack site and it takes in results from users' surveys, compares their answers with those of other users, then displays the name and picture of the user with the best overall match. _I went above and beyond to also calculate the percentage of compatibility and sort the friends so that the user could see more than one match and evaluate their choice with that **human** touch._

I used Express to handle routing and mySQL to read and write data, as well as deployed my app to Heroku so others could fill it out.

### Demo

- I was given [this demo](https://friend-finder-fsf.herokuapp.com/) to emulate.

### Structural Requirements _From The Instructional Team's Perspective_

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   - A GET Route to `/survey` which should display the survey page.
   - A default, catch-all route that leads to `home.html` which displays the home page. -->

4. Your `apiRoutes.js` file should contain two routes:

   - A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   - A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. In addition to the two routes, your apiRoutes.js file will included a connection to your database and the required logic to read and write data. Be sure to require the 'mysql' npm package!

6. Determine the user's most compatible friend using the following as a guide:

   - Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   - With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     - Example:
       - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       - Total Difference: **2 + 1 + 2 =** **_5_**
   - Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   - The closest match will be the user with the least amount of difference. -->

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

   - The modal should display both the name and picture of the closest match.

8. Be sure to write the submitted user data back to the database. Remember to first turn your array of scores back into a string of comma separated numbers.

## Check it out!

**My app is deployed [here](https://secret-citadel-85685.herokuapp.com/)!**
