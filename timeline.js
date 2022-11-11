
const clickMonday = document.querySelector("#monday");
const showMondays = document.querySelectorAll(".mondayShow");
const clickTuesday = document.querySelector("#tuesday");
const showTuesdays = document.querySelectorAll(".tuesdayShow");
const clickWednesday = document.querySelector("#wednesday");
const showWednesdays = document.querySelectorAll(".wednesdayShow");
const clickThursday = document.querySelector("#thursday");
const showThursdays = document.querySelectorAll(".thursdayShow");
const clickFriday = document.querySelector("#friday");
const showFridays = document.querySelectorAll(".fridayShow");


clickMonday.addEventListener("click", function() {
        for(let showMonday of showMondays) {
            if (showMonday.style.display === "block") {
                showMonday.style.display = "none";
            }  else {
                    showMonday.style.display = "block";
                }              
}});


clickTuesday.addEventListener("click", function() {
        for(let showTuesday of showTuesdays){
            if (showTuesday.style.display === "block") {
                        showTuesday.style.display = "none";
            }  else {
                showTuesday.style.display = "block";
                }
}});

clickWednesday.addEventListener("click", function() {
        for(let showWednesday of showWednesdays){
                if (showWednesday.style.display === "block") {
                        showWednesday.style.display = "none";
         }  else {
                showWednesday.style.display = "block";
                 }
}});

 clickThursday.addEventListener("click", function() {
        for(let showThursday of showThursdays){
                if (showThursday.style.display === "block") {
                        showThursday.style.display = "none";
         }  else {
                showThursday.style.display = "block";
                 }
}});

 clickFriday.addEventListener("click", function() {
        for(let showFriday of showFridays){
                if (showFriday.style.display === "block") {
                        showFriday.style.display = "none";
         }  else {
                showFriday.style.display = "block";
                 }
}});
