let userScore = 0;
let compScore = 0;

// DOM Variables
// Caching the DOM means I am storing these elements for future use 
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
};

function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
};

function win(userChoice, compChoice){
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice)
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(compChoice)}${smallComp}. You won!`;
	// using these `` is CS6 - to put variables in this string, they need to be surrounded by ${}
	userChoice_div.classList.add("greenGlow");
	setTimeout(() => userChoice_div.classList.remove("greenGlow"), 300);
	// using '=>' instead of 'function' and don't need these {} 
};

function lose(userChoice, compChoice){
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice)
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(compChoice)}${smallComp}. You lost.`;
	userChoice_div.classList.add("redGlow");
	setTimeout(() => userChoice_div.classList.remove("redGlow"), 300);
};

function draw(userChoice, compChoice){
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice)
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} is the same as ${convertToWord(compChoice)}${smallComp}. It's a draw.`;
	userChoice_div.classList.add("grayGlow");
	setTimeout(() => userChoice_div.classList.remove("grayGlow"), 300);
};

function game(userChoice){
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
	};
	
};


function main(){
	rock_div.addEventListener("click", () => game("r"));
	paper_div.addEventListener("click", () => game("p"));
	scissors_div.addEventListener("click", () => game("s"));
};

main();



