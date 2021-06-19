let button = document.getElementById("button");
let info = document.getElementById("info");

button.addEventListener("click",function(){
    let xReq = new XMLHttpRequest();
    xReq.open('GET','js/cars.json');
    xReq.onload = function(){
       let xData = JSON.parse(xReq.responseText);
       TheEvent(xData);
    };
    xReq.send();
});

let TheEvent = (Data)=>{
    let DataObjact = "";
    for(let i =0 ; i<Data.length;i++){
        DataObjact += "<p>"+Data[i].name+"is a "+Data[i].model+"<hr></p>";
    }
    info.insertAdjacentHTML("beforeend",DataObjact)
}