
var getRadioVal = function(radName) {
  var radio = document.forms[0].elements[radName];
  for(i=0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value;
    }
  }
}

var player1 = getRadioVal("player1");
var player2 = getRadioVal("player2");
console.log(player1);
console.log(player2);


var walrus = {
   name: "Walrus",
   strength: 10,
   specialMoveOne: "mustache-grinds",
   superSpecialMove: "administers an ULTRA-INVASIVE TUSK PROCEDURE on",
   onDeathPhrase: "",
   health: 140
};

var mango = {
   name: "Mango",
   strength: 15,
   specialMoveOne: "sticky-punches",
   superSpecialMove: "DANCES FURIOUSLY upon",
   health: 100
};

document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango1.png)";
document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus1.png)";

var fightClick = function() {
  fight(mango, walrus, mango.health, walrus.health);
};


var fight = function(orcA, orcB, healthA, healthB, playerTurn) {
  var randomA = Math.random();
  if (playerTurn) {

    if (randomA < 0.2) {
      healthA = healthA - orcB.strength*2;
      console.log(orcB.name + " " + orcB.superSpecialMove + " " + orcA.name + "! Health at" + " " + healthA);
      document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus3.png)";
      document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango6.png)";
    }
    else if (randomA < 0.8) {
      healthA = healthA - orcB.strength;
      console.log(orcB.name + " " + orcB.specialMoveOne + " " + orcA.name + "! Health at" + " " + healthA);
      document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus2.png)";
      document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango6.png)";
    }
    else {
      console.log(orcB.name + " missed!");
      document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus2.png)";
      document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango1.png)";
    }
    if(healthA <= 0) {
    console.log(orcA.name + " has been defeated.  " + orcB.name + ", FINISH HIM!");
    document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango4.png)";
    document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus5.png)";
    return;
    }
    playerTurn = false;
  }

  else {

    var randomB = Math.random();
    if (randomB < 0.2) {
    healthB = healthB - orcA.strength*2;
    console.log(orcA.name + " " + orcA.superSpecialMove + " " + orcB.name + "!" + " " + orcB.name + "'s" + " health is now at" + " " + healthB);
    document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango3.png)";
    document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus6.png)";
    }
    else if (randomB < 0.8){
      healthB = healthB - orcA.strength;
      console.log(orcA.name + " " + orcA.specialMoveOne + " " + orcB.name + "!  Health at" + " " + healthB);
      document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango2.png)";
      document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus6.png)";
    }
    else {
          console.log(orcA.name + " missed!");
    }
    if (healthB <= 0) {
      console.log(orcB.name + " is crying, A LOT.");
      document.getElementById("contestantTwo").style.backgroundImage = "url(images/Walrus4.png)";
      document.getElementById("contestantOne").style.backgroundImage = "url(images/Mango5.png)";

      return;
    }
  playerTurn = true;
  }



  setTimeout(function() {
    return fight(orcA, orcB, healthA, healthB, playerTurn);
  }, 300);
};

//document.getElementById("fight-button").addEventListener('click', fightClick);
