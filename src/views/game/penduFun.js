// var prompt = require("prompt")
// var randomWords = require('random-words');

// var mysteryWord = randomWords();
// var letters = [];
// var numMissingLetters = mysteryWord.length;

// console.log("Your word for now is: ", getUnfinishedWord(mysteryWord));

// function getUnfinishedWord(word) {
//     return word.split("").map(
//         function (element) {
//             return letters.indexOf(element) === -1 ? "_" : element;
//         }
//     ).join(" ");
// }

// function getOnlyWrongLetters(word) {

//     return letters.filter(
//         function (element) {
//             return word.indexOf(element) === -1;
//         }
//     );
// }

// function numberOfMissingLetters(word) {
//     var missingLetters = word.split("").filter(
//         function (element) {
//             return letters.indexOf(element) === -1;
//         }
//     )
//     return missingLetters.length;
// }

// var optionsPrompt = {
//     name: "letterOrWord",
//     validator: /^[a-zA-Z]/,
//     description: "Please enter a letter or a word"
// }

// function displayPrompt(numberOfTriesLeft) {

//     prompt.get(optionsPrompt, function (err, res) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         var inputUser = res.letterOrWord;

//         if (inputUser.length === 1) {

//             if (letters.indexOf(inputUser) === -1) {
//                 letters.push(inputUser);
//             } else {
//                 console.log("You've already tried with that letter. I'm not counting this try because I'm nice");

//                 displayPrompt(numberOfTriesLeft)
//                 return;
//             }

//             if (numberOfMissingLetters(mysteryWord) === 0) {
//                 console.log("You've won!! Congratulations!! The word was:", mysteryWord);
//             } else {

//                 if (numMissingLetters === numberOfMissingLetters(mysteryWord)) {
//                     numberOfTriesLeft--;
//                 }

//                 if (numberOfTriesLeft > 0) {
//                     numMissingLetters = numberOfMissingLetters(mysteryWord);

//                     console.log("Your word for now is: ", getUnfinishedWord(mysteryWord));

//                     console.log("The wrong letters you entered are:", getOnlyWrongLetters(mysteryWord).join(" "));

//                     console.log(`You still have ${numberOfTriesLeft} number of tries`);

//                     displayPrompt(numberOfTriesLeft);
//                 } else {
//                     console.log(`You've lost :(. The word was ${mysteryWord}`);
//                     return;
//                 }
//             }
//         } else {
//             if (inputUser == mysteryWord) {
//                 console.log("You've won!! Congratulations!! The word was:", mysteryWord);
//             } else {
//                 numberOfTriesLeft--;

//                 if (numberOfTriesLeft > 0) {
//                     console.log(`No, the word was not ${inputUser}. You still have ${numberOfTriesLeft} number of tries`);

//                     displayPrompt(numberOfTriesLeft);
//                 } else {
//                     console.log(`You've lost :(. The word was ${mysteryWord}`);
//                     return;
//                 }
//             }
//         }
//     });
// }

// displayPrompt(10);