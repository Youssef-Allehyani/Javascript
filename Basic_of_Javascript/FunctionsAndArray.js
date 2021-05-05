//Functions 
function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("youssef@gamil.com"));


let sumOfTwoNumbers = (num1, num2) =>{
    if ((num1 == undefined) || (num2 == undefined) ){
        return "please enter the all numbers !";
    }
    return num1 + num2;
}

console.log(sumOfTwoNumbers(1,6))
let HostName = "youssef"


// Array 

const myArray = [];

myArray[0] = 'saad';
myArray[1] = 57;
myArray[2]= true;
myArray[3] = 'A';
console.log(myArray);

myArray.push("work");
console.log(myArray);
const lastItime=myArray.pop();
console.log(lastItime);

myArray.unshift(5);
console.log(myArray);
const theFirstItime = myArray.shift();
console.log(myArray);
console.log(theFirstItime);

const theDelteItime =  delete myArray[2];
console.log(theDelteItime)
console.log(myArray)

myArray.splice(1,2,34);
console.log(myArray);

const nextArray = ['0','1','2','3','4','5','6','7','8','9'];


console.log(nextArray);
console.log(nextArray.slice(3,6))
console.log(nextArray.reverse());
const joinArray = nextArray.join()
console.log(joinArray);
console.log(joinArray.split(","));

const Array1 = ["A","B","C","D","E","F"];
const Array2 = ["G","H","I","J","k"];

const newArray = [...Array1,...Array2] ;
const Matrecs = [Array2,Array1]

console.log(Array1);
console.log(Array2);
console.log(Array2.concat(Array1));
console.log(newArray);
console.log(Matrecs)
