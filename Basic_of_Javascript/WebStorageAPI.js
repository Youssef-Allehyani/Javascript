//web Storage API


const Array =["code","code","code"];
const theObject = {
    name :"youssef",
    hobbies : ["eat","Sleep","code"],
    logName : function (){
        console.log(this.name);
    } 
};

sessionStorage.setItem("theSessionStorag",JSON.stringify(theObject));
const mySessionData1 = sessionStorage.getItem("theSessionStorag");
const mySessionData2 = JSON.parse(sessionStorage.getItem("theSessionStorag"));
console.log(mySessionData1)
console.log(mySessionData2)

localStorage.setItem("theArraySession",JSON.stringify(Array));
// localStorage.removeItem("theArraySession")
// localStorage.clear()
const key =localStorage.key(0)


const ArraySession = localStorage.getItem("theArraySession");
const ArraySession2 = JSON.parse(localStorage.getItem("theArraySession"));
console.log(ArraySession)
console.log(ArraySession2)
console.log(key)
console.log(localStorage.length)

// Modules 

import  {play , gool ,winer} from "./ObjectsAndClasses.js";
import  {SpecialtyPizza} from "./ObjectsAndClasses.js";

const SpecialPizza = new SpecialtyPizza("medium","vegetable pizza");
SpecialPizza.slice();


console.log(play());
console.log(gool());
console.log(winer());