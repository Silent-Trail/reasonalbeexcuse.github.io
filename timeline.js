
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
const showMondayKataExample = document.querySelector(".mondayKataExample");
const showTuesdayKataExample = document.querySelector(".tuesdayKataExample");
const showWednesdayKataExample = document.querySelector(".wednesdayKataExample");
const showThursdayKataExample = document.querySelector(".thursdayKataExample");
const mondayKata = document.querySelector(".showMondayKataExample");
const tuesdayKata = document.querySelector(".showTuesdayKataExample");
const wednesdayKata = document.querySelector(".showWednesdayKataExample");
const thursdayKata = document.querySelector(".showThursdayKataExample");
const hideMondayKataExample = document.querySelector(".mondayButton");
const hideTuesdayKataExample = document.querySelector(".tuesdayButton");
const hideWednesdayKataExample = document.querySelector(".wednesdayButton");
const hideThursdayKataExample = document.querySelector(".thursdayButton");
const showMondayKataVariante1 = document.querySelector(".mondayKataVariante1");
const showMondayKataVariante2 = document.querySelector(".mondayKataVariante2");
const showMondayKata1 = document.querySelector(".kataMonday1");
const showMondayKata2 = document.querySelector(".kataMonday2");
const showTuesdayKataVariante1 = document.querySelector(".tuesdayKataVariante1");
const showTuesdayKataVariante2 = document.querySelector(".tuesdayKataVariante2");
const showTuesdayKata1 = document.querySelector(".kataTuesday1");
const showTuesdayKata2 = document.querySelector(".kataTuesday2");
const showWednesdayKataVariante1 = document.querySelector(".wednesdayKataVariante1");
const showWednesdayKataVariante2 = document.querySelector(".wednesdayKataVariante2");
const showWednesdayKata1 = document.querySelector(".kataWednesday1");
const showWednesdayKata2 = document.querySelector(".kataWednesday2");
const showThursdayKataVariante1 = document.querySelector(".thursdayKataVariante1");
const showThursdayKata1 = document.querySelector(".kataThursday1");






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


mondayKata.addEventListener("click", function() {
        showMondayKataExample.classList.toggle("hide");
});

tuesdayKata.addEventListener("click", function() {
        showTuesdayKataExample.classList.toggle("hide");
});

wednesdayKata.addEventListener("click", function() {
        showWednesdayKataExample.classList.toggle("hide");
});

thursdayKata.addEventListener("click", function() {
        showThursdayKataExample.classList.toggle("hide");
});

hideMondayKataExample.addEventListener("click", function() {
        showMondayKataExample.classList.toggle("hide");
});

hideTuesdayKataExample.addEventListener("click", function() {
        showTuesdayKataExample.classList.toggle("hide");
});

hideWednesdayKataExample.addEventListener("click", function() {
        showWednesdayKataExample.classList.toggle("hide");
});

hideThursdayKataExample.addEventListener("click", function() {
        showThursdayKataExample.classList.toggle("hide");
});

showMondayKataVariante1.addEventListener("click", function() {
        showMondayKata1.classList.toggle("hide");
});

showMondayKataVariante2.addEventListener("click", function() {
        showMondayKata2.classList.toggle("hide");
});

showTuesdayKataVariante1.addEventListener("click", function() {
        showTuesdayKata1.classList.toggle("hide");
});

showTuesdayKataVariante2.addEventListener("click", function() {
        showTuesdayKata2.classList.toggle("hide");
});

showWednesdayKataVariante1.addEventListener("click", function() {
        showWednesdayKata1.classList.toggle("hide");
});

showWednesdayKataVariante2.addEventListener("click", function() {
        showWednesdayKata2.classList.toggle("hide");
});

showThursdayKataVariante1.addEventListener("click", function() {
        showThursdayKata1.classList.toggle("hide");
});
