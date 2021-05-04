console.log("hello world");
console.log(typeof " youssef");
console.log(typeof 12);
console.log(typeof true);
// Strings 
const HostName = "youssef Saad Alleyani";
// String Methods 
console.log(HostName.indexOf("Saad"));

// Numbers

const age = 21;
const StringAge = "21"
console.log(Number(StringAge) == age)

// math methods 

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.round(3.5));
console.log(Math.pow(2, 5));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

// Random letter from my name 

console.log(HostName.charAt(Math.floor(Math.random() * HostName.length)));

// if Statments 

let soup = "chicken noodle soup";
let Soup2 = "vegetables soup ";
let reply;

if (soup) {
    reply = `here's your order of ${soup}`;

} else if (Soup2) {
    reply = ` here's your order of ${Soup2}`

} else {
    reply = "sorry, we'er out of soup ";
}
console.log(reply);

// Switch statements 
let playerone = "scissors";
let computer = "paper";



switch (playerone) {
    case computer:
        console.log("thetin game");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("computer wins ");
        } else {
            console.log("playerone wins!");
        }
        break;
    case "paper":
        if (computer === " scissors") {
            console.log("computer wins ");
        } else {
            console.log("playerone wins!");
        }
        break;
    default:
        if (computer === " rock") {
            console.log("computer wins ");
        } else {
            console.log("playerone wins!");
        }
}

//Ternary Oprerator

let testScore = 59;
let myGrade = testScore > 89 ? "A" :
    testScore > 79 ? "B" :
        testScore > 69 ? "C" :
            testScore > 59 ? "D" :
                "F , Sorry you have to repet the exame .";



console.log(` My test grade is a ${myGrade} . `)

// User input 

alert("Hello!")
let bollen = confirm("cleic OK if you waant read my page \n click cancel if you waant leave my page !")
console.log(bollen)

bollen = prompt("Please enter your name.")
console.log(bollen.trim())