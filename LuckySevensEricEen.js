function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["amount"].elements.length;
        loopCounter++) {
        if (document.forms["amount"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["amount"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["amount"]["num"].value = "";
    document.forms["amount"]["num"].focus();
}

function validateItems() {
    clearErrors();
    var num = document.forms["amount"]["num"].value;
    if (num == "" || isNaN(num)) {
        alert("Starting bet must be filled in with a number.");
        document.forms["amount"]["num"]
           .parentElement.className = "form-group has-error";
        document.forms["amount"]["num"].focus();
        return false;
    }
    if (num <= 0) {
        alert("Starting bet must be filled in with a positive number.");
        document.forms["amount"]["num"]
           .parentElement.className = "form-group has-error";
        document.forms["amount"]["num"].focus();
        return false;
    }

//The curr (currency) function makes its input show exactly two decimal places
function curr(n) {
  n=parseFloat(n);return isNaN(n)?false:n.toFixed(2);
}

//We are set up for rolling two 6-sided die currently
function rollDice() {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
  }

  for (var i = 0; i < 100; i++) {
    console.log(rollDice());
  }

//With amount=num, we can change the value of the bet while retaining its
//original value
var amount = num

function winOrLose() {
    if (rollDice() == 7) {amount += 4} else {amount -= 1}
  }

var totalRolls = 0
var highestWon = amount
var countAtHighest = 0
function playTheGame() {
    while (amount >= 1) {
      winOrLose()
      totalRolls += 1
      if (amount > highestWon) {highestWon = amount}
      if (highestWon == amount) {countAtHighest = totalRolls}
    }
  }

playTheGame()

//We know that if amount=0, then all of the results have been generated random
//the num entered is no longer needed, and we can reset the starting bet field
if (amount == 0) {
  resetForm()
}

   document.getElementById("results").style.display = "block";
   document.getElementById("startingBet").innerText = "$" + curr(Number(num));
   document.getElementById("totRolls").innerText = totalRolls;
   document.getElementById("highestWon").innerText = "$" + curr(highestWon);
   document.getElementById("countAtHighest").innerText = countAtHighest;
   //We are returning false so that the form doesn't submit
   //and so that we can see the results
   return false;
}
