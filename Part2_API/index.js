// Server setup
const express = require('express');
const app = express();
const port = 3000;
// File constants
const fs = require('fs');
const nameList = 'OTwistNameCount.txt';

var wordCount = [];

fs.readFile(nameList, 'utf8', (err, data) => {
   if(err) throw err;
   var firstNamesArray = splitByNewLine(data);
   wordCount = convertToJSONObject(firstNamesArray);
})

app.get('/', (req, res) => {
   res.send("Please use the /name-count endpoint to find the number of times a specific name appears in Oliver Twist");
})

app.get('/name-count', (req, res) => {
   // Check to see if name query parameter was supplied by user
   let input = req.query.name ? req.query.name : "error"
   if (input !== "error") {
      var responseJSON = wordCount.find(x => x.name.toLowerCase() === req.query.name.toLowerCase());
      if (responseJSON === undefined) {
         res.json({
            name: req.query.name,
            count: 0,
         })
      } else {
         res.json(responseJSON);
      }
   } else {
      res.json({
         name: "Invalid",
         msg: "Please enter a name parameter"
      });
   }
});

app.listen(port, () => {
   console.log(`Server at: http://localhost:${port}`);
});

function splitByNewLine (text) {
   var wordsArray = text.split("\n");
   return wordsArray;
}

function convertToJSONObject(wordsArray) {
   var returnArray = [];
   returnArray = wordsArray.map(word => {
      var nameAndCount = word.split(":");
      return {
         name: nameAndCount[0],
         count: parseInt(nameAndCount[1])
      };
   });

   return returnArray;
}