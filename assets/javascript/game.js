var computerChoices = [r,p,s]; 
var userHTML = document.getElementById('user-guesses');
var winsHTML = document.getElementById('wins'); 
var lossesHTML = document.getElementById('losses');

for (var i = 0; i < computerChoices.length; i++) 
	document.onkeyup = function(event) {
		var userChoice = event.key;
		var computerChoice = computerChoices [Math.floor(Math.random()computerChoices.length)];

		if (userChoice === 'r' || userChoice === 'p' || userChoice === 's'){

			if (userChoice === computerChoice) { 
			} else if (userChoice === 'r' && computerChoice === 'p') {
          losses++;
        } else if (userChoice === 'r' && computerChoice === 's') {
          wins++;
        } else if (userChoice === 'p' && computerChoice === 'r') {
          wins++;
        } else if (userChoice === 'p' && computerChoice === 's') {
          losses++;
        } else if (userChoice === 's' && computerChoice === 'p') {
          wins++;
        } else if (userChoice === 's' && computerChoice === 'r') {
          losses++;
        } else {
          alert('you broke the game');
		}
	
		userHTML.textContent = userChoice;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
	}
} else { 
	alert("you aren't very good at this")}
};


var userHTML = document.getElementById('user-guesses');
var winsHTML = document.getElementById('wins'); 
var lossesHTML = document.getElementById('losses'); 

var wins = 0; 
var losses = 0;
var guessesLeft = 10; 
 




