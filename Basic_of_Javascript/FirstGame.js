let playGame = confirm("Shall we play rock , paper or scissors ?");

if (playGame) {
    let playerChoice = prompt("please enter rock , paper or scissors .")
    if (playerChoice) {
        playerone = playerChoice.trim().toLocaleLowerCase();
        if (playerone === "rock" || playerone === "paper" || playerone === "scissors") {
            let CamputerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = CamputerChoice === 1 ? "rock" :
                CamputerChoice === 2 ? "paper" :
                    "scissors";
            let result =
                computer === playerone ? "The Tin Game" :
                    playerone === "rock" && computer === "paper" ?
                        `playerOne : ${playerone} \nComputer: ${computer}\ncomputer wins` :
                        playerone === "rock" && computer === "scissors" ?
                            `playerOne : ${playerone} \nComputer: ${computer}\nplayerOne wins` :
                            playerone === "paper" && computer === "scissors" ?
                                `playerOne : ${playerone} \nComputer: ${computer}\ncomputer wins` :
                                playerone === "paper" && computer === "rock" ?
                                    `playerOne : ${playerone} \nComputer: ${computer}\nplayerOne wins` :
                                        `playerOne : ${playerone} \nComputer: ${computer}\ncomputer wins` 
        alert(result)
        let playagan = confirm("Woud you like paly agan ?");
        playagan ? location.reload() : alert("ok see you later ")

        } else {
            alert("You didn't enter rock , paper of scissors.");
        }

    } else {
        alert("I guess you changed your mind. you hope we can see you next time .")
    }

} else {
    alert("ok, see you next time .")
}