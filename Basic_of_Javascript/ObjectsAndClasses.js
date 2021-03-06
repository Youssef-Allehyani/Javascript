//Objects
const firstObject = {
    action: function () {
        console.log("Hello word!")

    }

};




var Father = {
    firstName:"Saad",
    familyNeme: "Alleyahi",
    age: 60,
    gender: "man",
    walks: function () {
        return "walk on tow feet";
    },
    eat: function () {
        return "eat by hands ";
    },
}

const fourthSon = Object.create(Father);
fourthSon.firstName = "Youssef";
fourthSon.age = 21;

const lastDaughter = Object.create(Father);
lastDaughter.firstName = "Raghad";
lastDaughter.age = 19;
lastDaughter.gender = "female"

const SaadFamily = {
    Father: function () {
        console.log(`Name is ${Father.firsName} ${Father.familyNeme}\nage is ${Father.age}`)
    },
    fourthSon : function(){
        console.log(` Name is ${fourthSon.firsName} ${fourthSon.familyNeme}\nage is ${fourthSon.age} }`)
    },
    lastDaughter : function(){
        console.log(`Name is ${lastDaughter.firsName} ${lastDaughter.familyNeme}\n age is ${lastDaughter.age} ${lastDaughter.gender}`)
    },
}
SaadFamily.lastDaughter();
console.log(Father.hasOwnProperty("firstName"));
delete Father.firstName;

console.log(Father.hasOwnProperty("firstName"));

const {firstName:myName , age } = fourthSon;

console.log(myName);
console.log(age)
//Json 

const sendJson = JSON.stringify(Father);
console.log(Father);
console.log(sendJson);
console.log(typeof sendJson);

const receiveJson = JSON.parse(sendJson); 
console.log(receiveJson);
console.log(typeof receiveJson);

//Classes 
export class Pizza{
    #crust = "original";
    #toppings = [];
    constructor(pizzaSize ,pizzaType){
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
        
    }
    getcrust(){
        return this.#crust;
    } 
    setcrust(crust){
        this.#crust = crust;
    }
    getToppings(){
        return this.#toppings;
    }
    setToppings(toppings){
        this.#toppings.push(toppings)
    }
    bakeIt(){
        return console.log(`We are baking ${this.#crust} ${this.pizzaSize} Pizza with ${this.#toppings} `)
    }
}

 export class SpecialtyPizza extends Pizza{
    constructor(pizzaSize ,pizzaType){
        super(pizzaSize,pizzaType);
        this.cheese =  "lot of cheese"
    }
    slice(){
        console.log(`The ${this.pizzaType} comming with ${this.cheese} and The ${this.pizzaSize} size has 8 slice`)

    }
}



const SpecialPizza = new SpecialtyPizza("medium","vegetable pizza");
SpecialPizza.slice();

const myPizza = new Pizza("medium","vegetable");
myPizza.setToppings(["paper","olives"]);
console.log(myPizza.getcrust());
myPizza.setcrust("Thin")
myPizza.bakeIt();

//modules

export   function play(){
    return"Start to play ."
}

export const gool =()=>{
   return"gooooooool"
}

export const winer =()=>{
    return("you win !")
}