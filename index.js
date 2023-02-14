let plusOneSecond=document.getElementsByClassName('plusOneSecond');
let plusOne=document.getElementsByClassName('plusOne');
let scoreTeamOne=document.querySelector('.score-team1');
let scoreTeamTwo=document.querySelector('.score-team2');


let countOne=0;
let countTwo=0;
function plusOneTeamOne() {
    countOne++;
    scoreTeamOne.textContent = countOne;
}
function plusOneTeamTwo() {
   countTwo++;
   scoreTeamTwo.textContent = countTwo;

}
function plusTwoTeamOne() {
 countOne = countOne + 2;
 scoreTeamOne.textContent=countOne;
}
function plusTwoTeamTwo(){
    countTwo = countTwo + 2;
    scoreTeamTwo.textContent=countTwo;
}
function plusThreeTeamOne() {
    countOne = countOne + 3;
    scoreTeamOne.textContent=countOne;
}
function plusThreeTeamTwo(){
    countTwo = countTwo + 2;
    scoreTeamTwo.textContent=countTwo;
}
