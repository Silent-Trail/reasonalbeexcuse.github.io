const clickEduardCharacter = document.querySelector("#eduardCharacter");
const showEduardStats = document.querySelector("#eduardStats");
const clickMarianCharacter = document.querySelector("#marianCharacter");
const showMarianStats = document.querySelector("#marianStats");
const clickTeamStats = document.querySelector("#showTeamStats");
const showTeamStats = document.querySelector("#teamStats");
const hideMarianOutline = document.querySelector("marianOutline");
const showMarianFarbe = document.querySelector("marianFarbe");


clickEduardCharacter.addEventListener("click", function() {
    if (showEduardStats.style.display === "block") {
            showEduardStats.style.display = "none";
    }  else {
            showEduardStats.style.display = "block";
        }
});

clickMarianCharacter.addEventListener("click", function() {
    if (showMarianStats.style.display === "block") {
            showMarianStats.style.display = "none";
    }  else {
            showMarianStats.style.display = "block";
        }
});

clickTeamStats.addEventListener("click", function() {
    if (showTeamStats.style.display === "block") {
            showTeamStats.style.display = "none";
    }  else {
            showTeamStats.style.display = "block";
        }
});



