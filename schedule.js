document.getElementById("opponent").value = localStorage.opponent;
document.getElementById("pointsFor").value = localStorage.pointsFor;
document.getElementById("pointsAgainst").value = localStorage.pointsAgainst;

var gameNumber = 1;
var totalFor = 0;
var totalAgainst = 0;

function enter() {
    var opponent = document.getElementById("opponent").value;
    var pointsFor = parseInt(document.getElementById("pointsFor").value);
    var pointsAgainst = parseInt(document.getElementById("pointsAgainst").value);
    var wl = "";
    if(pointsFor > pointsAgainst) {
      wl = "Win";
    }
    else if(pointsAgainst > pointsFor) {
      wl = "Lose";
    }
    else {
      alert("Ties are not allowed.");
      return;
    }
    if(typeof(Storage) !== "undefined") {
        localStorage.opponent = opponent;
        document.getElementById(gameNumber + "opponent").innerHTML = localStorage.opponent;
        localStorage.pointsFor = pointsFor;
        document.getElementById(gameNumber + "pointsFor").innerHTML = localStorage.pointsFor;
        localStorage.pointsAgainst = pointsAgainst;
        console.log(gameNumber);
        document.getElementById(gameNumber + "pointsAgainst").innerHTML = localStorage.pointsAgainst;
        console.log(gameNumber);
        localStorage.wl = wl;
        document.getElementById(gameNumber + "wl").innerHTML = localStorage.wl;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
    gameNumber += 1;
}

function enter2() {
    var pointsFor = parseInt(document.getElementById("pointsFor").value);
    var pointsAgainst = parseInt(document.getElementById("pointsAgainst").value);
    totalFor += pointsFor;
    totalAgainst += pointsAgainst;    
    document.getElementById("totalFor").innerHTML = totalFor;
    document.getElementById("totalAgainst").innerHTML = totalAgainst;
}