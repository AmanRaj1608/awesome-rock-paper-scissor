var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function computerChoice() {
    const choices = ['r' , 'p' , 's'];
    return choices[Math.floor( Math.random() * 3 )];
}

function convertToWorld(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissors";
}

function win(userInput , compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if( userInput ==='r' && compChoice ==='s'){
        result_p.innerHTML =  `Computer chosed Scissors. You Win 🎊✔🎉`;
    }
    else if( userInput ==='r' && compChoice ==='r'){
        result_p.innerHTML =  `Computer chosed Rock. You Win ✔🎊🎉`;
    }
    else if( userInput ==='s' && compChoice ==='p'){
        result_p.innerHTML =  `Computer chosed Paper. You Win ✔🎊🎉`;
    }
}

function Lose(userInput , compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if( userInput ==='r' && compChoice ==='p'){
        result_p.innerHTML =  "Computer chosed Paper 📜 . You Lost ❌";
    }
    else if( userInput ==='p' && compChoice ==='s'){
        result_p.innerHTML =  `Computer chosed Scissors ✂ . You Lost ❌`;
    }
    else if( userInput ==='s' && compChoice ==='r'){
        result_p.innerHTML =  `Computer chosed Rock ⬛ . You Lost ❌`;
    }
}

function Draw(userInput , compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if( userInput ==='r' && compChoice ==='r'){
        result_p.innerHTML =  `Computer chosed Rock ⬛ . It's a tie.`;
    }
    else if( userInput ==='p' && compChoice ==='p'){
        result_p.innerHTML =  `Computer chosed Paper 📜 . It's a tie.`;
    }
    else if( userInput ==='s' && compChoice ==='s'){
        result_p.innerHTML =  `Computer chosed Scissors ✂ . It's a tie.`;
    }
}

function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
    if( UserChoice === "rs" || UserChoice === "pr" || UserChoice === "sp" ){
        win(userInput , compChoice);
        console.log("Win");
    }
    else if( UserChoice === "rp" || UserChoice === "ps" || UserChoice === "sr" ){
        Lose(userInput , compChoice);
        console.log("Lose");
    }
    else if( UserChoice === "rr" || UserChoice === "pp" || UserChoice === "ss" ){
        Draw(userInput , compChoice);
        console.log("Draw");
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game('r');
    })
    paper_div.addEventListener('click', function(){
        game('p');
    })
    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();