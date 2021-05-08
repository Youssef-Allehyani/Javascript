//Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);

const viwe2 = document.querySelector("view2");
console.log(viwe2);

view1.style.display = "display";
viwe2.style.display = "none";


const views = document.getElementsByClassName("views");
console.log(views);

const sameViews = document.querySelectorAll('.views');
console.log(sameViews);


const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const oddDivs = view1.querySelectorAll("div:nth-of-type(2n-1)");
console.log(oddDivs);

for ( let i =0 ; i<oddDivs.length;i++ ){
    oddDivs[i].style.backgroundColor = "darkblue";
}

const navebar = document.querySelector("nav");
navebar.innerHTML = `<h1>hello</h1> <p>it should work . I hope that .`;
console.log(navebar);

console.log(oddDivs[0].parentElement);
console.log(oddDivs[0].parentElement.children);
console.log(oddDivs[0].parentElement.childNodes);
console.log(oddDivs[0].parentElement.hasChildNodes());
console.log(oddDivs[0].parentElement.lastChild);
console.log(oddDivs[0].parentElement.lastElementChild);
console.log(oddDivs[0].parentElement.firstChild);
console.log(oddDivs[0].parentElement.firstElementChild);
console.log(oddDivs[0].nextSibling);
console.log(oddDivs[0].nextElementSibling.nextElementSibling);
console.log(oddDivs[0].previousSibling);
console.log(oddDivs[3].previousElementSibling.previousElementSibling);

view1.style.display = "none";
viwe2.style.display = "display";
viwe2.style.flexDirection = "row";

while(viwe2.lastChild){
    viwe2.lastChild.remove();
}


const createDivs = (parent,iter) =>{
    const newDiv= document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor= "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px" ;
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);     
}

for(let i = 1 ; i<12;i++){
    createDivs(viwe2,i);
}