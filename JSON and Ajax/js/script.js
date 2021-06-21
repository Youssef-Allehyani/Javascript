let button = document.getElementById("button");
let info = document.getElementById("info");
let numberOfObjact = 0;
let Page = 1;
button.addEventListener("click",function(){
    let xReq = new XMLHttpRequest();
    xReq.open('GET','js/cars'+Page+'.json');
    xReq.onload = function(){
       let xData = JSON.parse(xReq.responseText);
       TheEvent(xData,numberOfObjact);
       numberOfObjact++;
       if (numberOfObjact >1){
        numberOfObjact =0;
        Page++;
    };
    if (numberOfObjact > 1 || Page>3){
            button.classList.add("hide");
            button.style.background = "#eee";
            button.style.color = "lightgray";
        }
    };
    xReq.send();
});

let TheEvent = (Data,number)=>{
    let DataObjact = [];
    let FourCars = "";
    let salonCars = "";
    for(let i =0 ; i < Data[number].type.four.length;i++){
        if(i==0){
            FourCars+=Data[number].type.four[i];
            salonCars+=Data[number].type.salon[i];
        }else{
            FourCars+=" and "+Data[number].type.four[i]+".";
            salonCars+=" and "+Data[number].type.salon[i]+".";
        }
        
    }
    for(let i =0 ; i<Data.length;i++){
        DataObjact.push("<p>"+Data[i].name+"is a "+Data[i].model+
        "<br> That has 4x4 like: "+FourCars+"<br> The Salon like: "+salonCars+"<br> year modal:  "+Data[i].year+"<hr></p>");
    };
    
    info.insertAdjacentHTML("beforeend",DataObjact[number]);
};