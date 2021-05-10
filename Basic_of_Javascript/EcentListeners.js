const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// syntax : addEventListener(event , function, useCapture)

const doSomthing = () => {
    alert("doning somtheing");
};

h2.addEventListener("click", doSomthing);

h2.removeEventListener("click", doSomthing, false);
// anonymous event

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        
        // view.style.backgroundColor = "purple";
        // view.classList.add("purple")
        // view.classList.remove("darkblue")
        view.classList.toggle("darkblue");
        view.classList.toggle("purple")
        
    },false);
    div.addEventListener("click",(event)=>{
        
        // div.style.backgroundColor = "blue";
        div.classList.toggle("blak");
        div.classList.toggle("darkblue")
        
    },false);
    h2.addEventListener("click",(event)=>{
        // event.stopPropagation();
        const theText = event.target.textContent ;
        theText === "My 2nd view" ?
        (event.target.textContent = "clicked"):
        (event.target.textContent = "My 2nd view")
    },false);

   const nave = document.querySelector("nav");
   nave.addEventListener("mouseover",(event)=>{
       event.target.classList.add("height100");
   })
   nave.addEventListener("mouseout",(event)=>{
       event.target.classList.remove("height100");
   })
   
}