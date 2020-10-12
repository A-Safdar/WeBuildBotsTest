# WeBuiltBotsTest

This repo contains two node.js programs as part of the We Build Bots coding test.

Clone the entire repo using `git clone https://github.com/A-Safdar/WeBuildBotsTest.git`

## Part 1 - Word/Name frequency count

### Goal: 
- Using the text files provided, write code to read the entire Oliver Twist book and count the occurences of names found in the book in descending order.
- This list should then be printed onto a text file in the following format:
  - Oliver: 100
  - Noah: 55

### How to use:
- In a terminal window, navigate to the folder in which you cloned this repo
- Change to the 'Part1_NameCounter' folder
- `npm install` in terminal to install any dependancies
- `node index.js` to run the program. You should see after a few seconds a new text file in that directory

## Part 2 - Basic express api to get count of a name

### Goal: 
- Build a basic Express api with one endpoint to get the number of times a specific name appears in Oliver Twist
- The response should be in a JSON format with two field:
  - name
  - count

### How to use:
- In a terminal window, navigate to the folder in which you cloned this repo
- Change to the 'Part2_API' folder
- `npm install` in terminal to install any dependancies
- `node index.js` to run the start the server. It will tell you the url at which you can access the api
  - e.g. `Server at: http://localhost:3000`
- Either using Postman, Insomnia or a similar app, set up a get request with the url shown in the terminal with the following headers:
  - `Content-Type: application/json`
- You can then navigate to the /name-count endpoint: `http://localhost:3000/name-count`
  - This endpoint takes one query parameter called 'name'.
- For example, if you wanted to search for 'Oliver' the request would look like the following:
  - `http://localhost:3000/name-count?name=oliver`