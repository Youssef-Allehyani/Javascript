let xReq = new XMLHttpRequest();
xReq.open('GET','js/cars.json');
xReq.onload = function(){
   let xData = JSON.parse(xReq.responseText);

   let m = 0;
    for(i in xData){
        document.write(xData[m].name+",");
        document.write(xData[m].model+"<br>")
        m =+1
    }

};
xReq.send()
