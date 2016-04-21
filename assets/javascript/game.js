
function init(){

//words in our list 
var wordList = ["monkey", "kangaroo", "armadillo","giraffe","raccoon","orangutan"];
//letters that the user has already picked
var usedLetters = "";
//breakdown of wordlist[x] into an array of individual letters
var arrayLettersInWord = "";
//the displayed version of what the user has guess or inital word display
var displayWord = "";
var guessCounter = 12;
var wins = 0;
var losses = 0;


//CODE TO PICK RANDOM WORD
var selectWord = wordList[Math.floor(Math.random() * wordList.length)];
//display lines equaling letter count
	for (x=0; x<selectWord.length; x++){
		displayWord = displayWord + "_";
		}
	displayWord = displayWord.split("");
	arrayLettersInWord = selectWord.split("");
//}

//function game(){



document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//alert(guessCounter);
var userGuesshtml = document.getElementById('Guess');userGuesshtml.innerHTML= userGuess;

	if (arrayLettersInWord.indexOf(userGuess)>=0){
		
		var usedIdx = usedLetters.indexOf(userGuess);
		if (usedIdx==-1) {
		usedLetters = usedLetters + userGuess;			
		var letterPos = arrayLettersInWord.indexOf(userGuess);
		var matchedLetters=0;		
		for (i=0; i<selectWord.length; i++){
			if (arrayLettersInWord[i]== userGuess) {
			displayWord[i] = userGuess;
			//alert(displayWord);
			//alert(arrayLettersInWord);
			}	
			if (displayWord[i] == arrayLettersInWord[i]) {
					matchedLetters++
					if (matchedLetters == selectWord.length){
					wins++
					var winshtml = document.getElementById('wins');winshtml.innerHTML=wins;
					}
			}
			
		}
//			alert(displayWord);
//			alert(usedLetters);
			guessCounter--
			} else {
		alert("Letter " +userGuess+ " has already been used.");
		}	
	}
	else {
		
		var usedIdx = usedLetters.indexOf(userGuess);
		if (usedIdx==-1) {
			guessCounter--
		arrayLength = usedLetters.length;
		usedLetters +","+ userGuess;
	    } 

	}
var displaywordhtml = document.getElementById('displayword');displaywordhtml.innerHTML=displayWord;
var counterhtml = document.getElementById('guesscnt');counterhtml.innerHTML=guessCounter;
//var letterUsedhtml = document.getElementById('usedLetters')letterUsed.innerHTML=usedLetters;
//document.write(guessCounter);
if (guessCounter == 0){
	losses ++;
}
//
var losseshtml = document.getElementById('losses');losseshtml.innerHTML=losses;

//
}
}