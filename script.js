// getting all the elements from the html
// const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const diceImages = document.querySelectorAll('.dice img');
const totalElement = document.getElementById('total');
const messageElement = document.querySelector('.message h3');


//show the date and time on screen
function showDateTime() {
    const today = new Date();
    console.log(today);
    // dateElement.textContent = `Date: ${today.toLocaleDateString()}`;
    dayElement.textContent = today.toLocaleString('pt-PT', {day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
//   second: "2-digit",
  hour12: false});
}

//refresh the date and time every second
showDateTime();
setInterval(showDateTime, 1000);


//roll the dice randomly
function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    //get random dice numbers
    const dice1 = getRandomDice();
    const dice2 = getRandomDice();

    //calculate the total
     const total = dice1 + dice2;
     totalElement.textContent = total;

    console.log("dice 1:", dice1);
        console.log("dice 2:", dice2);

    console.log("total:", total);

    //show the image according to the random number generated
    diceImages[0].src = `dice-${dice1}.svg`;
    diceImages[1].src = `dice-${dice2}.svg`;

    //if the total is greater than 8, player wins, else player loses
    if (total > 8) {
        messageElement.textContent = "You won!";
        // messageElement.style.color = "green";
    } else {
        messageElement.textContent = "You didn't win: Try Again!";
        // messageElement.style.color = "red";
    }

}

function btnClick() {
    rollDice();
}

