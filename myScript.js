console.log("Rock Papper Scissor!")

// computer hand function
function getComputerChoice() {
    let a = Math.random();
    // console.log(a)
    if (a <= 1/3) {
        return ("rock");
    } else if (a <= 2/3) {
        return ("paper");
    } else {
        return ("scissor");
    }
}

// human hand function
function getHumanChoice() {
    let b = prompt("Choose your hand! ");
    b = b.toLowerCase();
    if (b === "rock") {
        return ("rock");
    } else if (b === "scissor") {
        return ("scissor");
    } else if (b === "paper") {
        return ("paper");
    } else {
        getHumanChoice();
    }
}

// initialize score
let humanScore = 0;
let computerScore = 0;


// round function
function playRound(humanHand, computerHand) {
    console.log(`computer: ${computerHand}`)
    console.log(`human: ${humanHand}`)

    if (humanHand === computerHand) {
        console.log(`both you and computer choose ${humanHand}. It's a tie!`)
    } else if ((humanHand === "paper" & computerHand === "rock") 
        || (humanHand === "rock" & computerHand === "scissor")
        || (humanHand === "scissor" & computerHand === "paper")){
        console.log(`you choose ${humanHand} and computer choose ${computerHand}. You win!`)
        humanScore += 1
    } else {
        console.log(`you choose ${humanHand} and computer choose ${computerHand}. You lose!`)
        computerScore += 1
    }
    
}


// play Rock Papper Scissor! 
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
console.log(`human score: ${humanScore}, computer score: ${computerScore}`)
