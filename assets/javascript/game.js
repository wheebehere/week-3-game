function init(){

//words in our list 
var wordList = ["monkey", "kangaroo", "armadillo"];
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

	if (arrayLettersInWord.indexOf(userGuess)>=0){
		alert(usedLetters.indexOf(userGuess));
		var usedIdx = usedLetters.indexOf(userGuess);
		if (usedIdx==-1) {
		usedLetters = usedLetters + userGuess;			
		var letterPos = arrayLettersInWord.indexOf(userGuess);
		for (i=0; i<selectWord.length; i++){
			if (arrayLettersInWord[i]== userGuess) {
			displayWord[i] = userGuess;
			}
		}
			alert(displayWord);
			alert(usedLetters);
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
		usedLetters = usedLetters + userGuess;
	    } 

	}
var displaywordhtml = document.getElementById('displayword');displaywordhtml.innerHTML=displayWord;
var counterhtml = document.getElementById('guesscnt');counterhtml.innerHTML=guessCounter;
//document.write(guessCounter);
if (guessCounter == 0){
	alert("gameover");
}
}
//
//
}
//Play again?
// Taking the tallies and displaying them in HTML
//function playAgain(){
//	var html = "<p>Press the letter Y to start playing</p>" +
//	"<p>wins: " + 
//		wins + 
//		"</p>" +
//		"<p>losses: " + 
//		losses + 
//		"</p>" +


		// Placing the html into the game ID
//		document.querySelector('#hangman.game').innerHTML=html;

//}