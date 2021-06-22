const url = ("https://www.breakingbadapi.com/api/")
const number = 0;
const getAll = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    const description = Object.keys(data).map(key =>key);
    return description;
}
const getElements = async () => {
    try {
        const response = await fetch(url+"characters");
        const data = await response.json();
        const dataEli = data.map(actor => { return `<option>${actor.name}</option>` });
        document.querySelector("#actor ").innerHTML = `<select onchange="getCh(this.value)"> <option>chose one</option>${dataEli}</select>`;
        console.log(dataEli)
    } catch (error) {
        console.log(error)
    }

};
const getCh = async (name) => {
    if (name !== "chose one") {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await response.json();
        document.querySelector("#content h1").innerHTML = `${data[number].name}(${data[number].nickname}) <h3>${data[number].portrayed}</h3>`
        document.querySelector("#content img").src = data[number].img
        document.querySelector("#content h5").innerHTML = data[number].birthday
    } else {
        console.log("erro")
    }
};
getElements()
