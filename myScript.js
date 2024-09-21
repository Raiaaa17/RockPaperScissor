console.log("Rock Papper Scissor!")

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

function getHumanChoice() {
    let b = prompt("Choose your hand! ");
    return ("you choose" + b);
}

// console.log(getComputerChoice())

console.log(getHumanChoice())
