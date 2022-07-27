var container = document.querySelector(".container");
var article = document.createElement("article");
var input = document.createElement("input");
var savebtn=document.createElement("button");
var section = document.createElement("section");

var currenttime = document.querySelector("#currentDay");


currenttime.innerHTML = moment();

for( i=8; i<18; i++){
    var sectioncreate = document.createElement("section");
    var articlecreate = document.createElement("article")
    var inputcreate = document.createElement("input");
    var buttoncreate = document.createElement("button");
    
    inputcreate.className ="calendarrow"+[i];
    articlecreate.className ="inputrow"+[i];
    buttoncreate.className ="button"+[i];
    inputcreate.setAttribute("id","coloredrow");
    articlecreate.setAttribute("id","timeslot");
    buttoncreate.setAttribute("id","iconsave");
    container.appendChild(sectioncreate);
    sectioncreate.appendChild(articlecreate);
    sectioncreate.appendChild(inputcreate);
    sectioncreate.appendChild(buttoncreate);
    buttoncreate.innerHTML="Save";

    articlecreate.innerHTML= moment().startOf('day').add(i,"hours").format("h:mm a");

    var hourblock = i;

    var currentdate = moment().hour();
    console.log(currentdate + " vs " + hourblock);

    if(currentdate > hourblock){
        inputcreate.style.backgroundColor = "lightgrey";
    } else if (currentdate == hourblock){
        inputcreate.style.backgroundColor ="orange"
    }

    var inputvalue = localStorage.getItem("response"+[i]);
    inputcreate.value = inputvalue;
};



    var butn8 = document.querySelector(".button8");
    butn8.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow8").value;
        localStorage.setItem("response8", JSON.stringify(response))
    });

    
    
    var butn9 = document.querySelector(".button9");
    butn9.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow9").value;
        localStorage.setItem("response9", JSON.stringify(response))
    });

    
    var butn10 = document.querySelector(".button10");
    butn10.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow10").value;
        localStorage.setItem("response10", JSON.stringify(response))
    });

    
    var butn11 = document.querySelector(".button11");
    butn11.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow11").value;
        localStorage.setItem("response11", JSON.stringify(response))
    });

    
    var butn12 = document.querySelector(".button12");
    butn12.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow12").value;
        localStorage.setItem("response12", JSON.stringify(response))
    });

    
    var butn13 = document.querySelector(".button13");
    butn13.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow13").value;
        localStorage.setItem("response13", JSON.stringify(response))
    });

    
    var butn14 = document.querySelector(".button14");
    butn14.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow14").value;
        localStorage.setItem("response14", JSON.stringify(response))
    });

    var butn15 = document.querySelector(".button15");
    butn15.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow15").value;
        localStorage.setItem("response15", JSON.stringify(response))
    });

    var butn16 = document.querySelector(".button16");
    butn16.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow16").value;
        localStorage.setItem("response16", JSON.stringify(response))
    });

    var butn17 = document.querySelector(".button17");
    butn17.addEventListener("click", function(){
        var response = document.querySelector(".calendarrow17").value;
        localStorage.setItem("response17", JSON.stringify(response))
    });


