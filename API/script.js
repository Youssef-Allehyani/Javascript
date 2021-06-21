const url = fetch("https://www.breakingbadapi.com/api/characters");
const number = 0;
const getElements = async ()=>{
    const response = await url;
    const data = await response.json();
    const dataEli = data.map(actor => {return`<option>${actor.name}</option>`});
    document.querySelector("#actor ").innerHTML  = `<select onchange="getCh(this.value)"> <option>chose one</option>${dataEli}</select>`;
    console.log(dataEli)
  
};
const getCh=async(name)=>{
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
    const data = await response.json();
    document.querySelector("#content h1").innerHTML = data[number].name
    document.querySelector("#content img").src = data[number].img
    document.querySelector("#content h5").innerHTML = data[number].birthday
};
getElements()