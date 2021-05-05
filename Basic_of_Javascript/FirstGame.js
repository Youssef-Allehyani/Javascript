let playGame = confirm("Shall we play rock , paper or scissors ?");

if (playGame) {
    while (playGame) {
        const playerChoice = prompt("please enter rock , paper or scissors .")
        if (playerChoice|| playerChoice==="") {
            const playerone = playerChoice.trim().toLocaleLowerCase();
            if (playerone === "rock" || playerone === "paper" || playerone === "scissors") {
                const CamputerChoice = Math.floor(Math.random() * 3 );
                const rpsArray = ["rock","paper","scissors"];
                const computer = rpsArray[CamputerChoice];

                const result =
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
                playGame = confirm("Woud you like paly agan ?");
                if (!playGame) alert("ok see you later ");
                continue;

            } else {
                alert("You didn't enter rock , paper of scissors.");
                continue;
            }

        } else {
            alert("I guess you changed your mind. you hope we can see you next time .")
            break;
        }
    }
} else {
    alert("ok, see you next time .")
}