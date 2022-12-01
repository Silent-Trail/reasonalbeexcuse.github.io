const clickEduardCharacter = document.querySelector("#eduardCharacter");
const showEduardStats = document.querySelector("#eduardStats");
const clickMarianCharacter = document.querySelector("#marianCharacter");
const showMarianStats = document.querySelector("#marianStats");
const clickTeamStats = document.querySelector("#showTeamStats");
const showTeamStats = document.querySelector("#teamStats");
const hideMarianOutline = document.querySelector("marianOutline");
const showMarianFarbe = document.querySelector("marianFarbe");


clickMarianCharacter.addEventListener("click", function() {
        showMarianStats.classList.toggle("hide");
});


clickTeamStats.addEventListener("click", function() {
        showTeamStats.classList.toggle("hide");
});


clickEduardCharacter.addEventListener("click", () =>  { 
        showEduardStats.classList.toggle("hide");
});