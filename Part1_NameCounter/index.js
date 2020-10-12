const fs = require('fs');
const oTwist = 'oliver-twist.txt';
const firstNames = 'first-names.txt';
var firstNamesArray = [];
var nameCount = [];

// Read the first-names.txt file that contains a list of first names
fs.readFile(firstNames, 'utf8', (err, data) => {
   if(err) throw err;
   firstNamesArray = splitBySpacesAndCharacters(data);
})

// Read oliver twist from current directory
fs.readFile(oTwist, 'utf8', (err, data) => {
   if (err) throw err;
   // 1. Once data is received from file, split by spaces to create an array (var wordsArray)
   // 2. Use the firstNamesArray to reduce the array to only include names (var filteredArray)
   // 3. Use the filteredArray to create a word map that contains the occurances of each name (var wordsMap)
   let wordsArray = splitBySpacesAndCharacters(data);
   let namesArray = extractValidNames(wordsArray);
   let namesMap = createWordMap(namesArray);
   // 4. Use the wordMap create array of objects and sort it by count
   nameCount = sortByCount(namesMap);
   // 5. Modify the object into the format stated in the test spec and write it to a file
   formatAndWriteToFile(nameCount);
});

function splitBySpacesAndCharacters (text) {
   // Use regex to split by spaces and any punctuation marks
   var wordsArray = text.split(/[\s;',.:]/);
   return wordsArray;
}

function extractValidNames (wordsArray) {
   var filteredArray = [];
   wordsArray.forEach(word => {
      if (firstNamesArray.includes(word)) {
         filteredArray.push(word);
      }
   });

   return filteredArray;
}

function createWordMap (wordsArray) {
   // Create map for word counts
   var wordsMap = [];
   wordsArray.forEach(key => {
      if (wordsMap.hasOwnProperty(key)) {
         wordsMap[key]++;
      } else {
         wordsMap[key] = 1;
      }
   });
   return wordsMap;
}

function sortByCount (wordsMap) {
   var sortedWordCount = [];
   sortedWordCount = Object.keys(wordsMap).map(key => {
      return {
         word: key,
         count: wordsMap[key]
      };
   });

   sortedWordCount.sort((a, b) => {
      return b.count - a.count;
   });

   return sortedWordCount;
}

function formatAndWriteToFile (wordCount) {
   var formattedArray = [];

   wordCount.forEach(word => {
      var string = `${word.word}: ${word.count}`;
      formattedArray.push(string);
   });

   fs.writeFile('OTwistNameCount.txt', formattedArray.join('\n'), (err) => {
      if (err) throw err;
      console.log("Success!");
   });
}