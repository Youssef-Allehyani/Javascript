const initGame = () => {
    const startGame = confirm("Shall we play rock , paper or scissors ?");
    startGame ? playGame() : alert("ok, see you next time.");
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidfeChice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoce(playerChoice);
        if (!playerChoice) {
            invalidfeChice();
            continue;
        }
        const computerChioce = getComputeChioce();
        const result = determinaeWiinner(playerChoice, computerChioce);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            break;
        }
    }
}


const getPlayerChoice = () => {
    return prompt("please enter rock , paper or scissors.")
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLocaleLowerCase();
    } else {
        return false;
    }
}
const decidedNotToPlay = () => {
    alert("I guess you changed your mind. you hope we can see you next time .")
}
const invalidfeChice = () => {
    alert("You didn't enter rock , paper of scissors.");
};

const evaluatePlayerChoce = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice
    } else {
        return false
    }

};
const getComputeChioce = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber]
};

const determinaeWiinner = (playerChoice, computerChioce) => {
    const winner =
    computerChioce === playerChoice ? "The Tin Game" :
    playerChoice === "rock" && computerChioce === "paper" ?
                `playerOne : ${playerChoice} \nComputer: ${computerChioce}\ncomputer wins` :
                playerChoice === "rock" && computerChioce === "scissors" ?
                    `playerOne : ${playerChoice} \nComputer: ${computerChioce}\nplayerOne wins` :
                    playerChoice === "paper" && computerChioce === "scissors" ?
                        `playerOne : ${playerChoice} \nComputer: ${computerChioce}\ncomputer wins` :
                        playerChoice === "paper" && computerChioce === "rock" ?
                            `playerOne : ${playerChoice} \nComputer: ${computerChioce}\nplayerOne wins` :
                            `playerOne : ${playerChoice} \nComputer: ${computerChioce}\ncomputer wins`
    return winner;
}
const displayResult = (result) => {
    alert(result);
}

const askToPlayAgain = () => {
    return confirm("Woud you like paly agan ?");
}



initGame();