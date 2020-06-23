let inputElement = document.querySelector('#input-field');
let rollButton = document.querySelector('#rolls-button');
let totalNum = document.querySelector('#total');
let resetButton = document.querySelector('#reset-button');
let showAllRolls = document.querySelector('#show-all-rolls-button');
let diceRolls = []

console.log(rollButton)
rollButton.addEventListener('click', function () {

    console.log('click');
    let numberOfDice = inputElement.value
    console.log(numberOfDice)
    for (let count = 0; count < numberOfDice; count++) {

        let rollDie = Math.floor(Math.random() * 6 + 1)
        console.log(rollDie)
        diceRolls.push(rollDie)
        // total += rollDie
        // cont += 1

    }

    let index = 0
    let sum = 0
    while ( index < diceRolls.length){
        sum += diceRolls[index]
        index += 1
    }
    console.log(sum)
    
    console.log(diceRolls)
    // console.log(total)
    // totalNum.innerHTML=total

})

// resetButton.addEventListener('click', function () {
//     console.log('click to reset');
//     inputElement.value = ""
//     diceList.innerHTML = ""
//     totalNum.innerHTML = ""
// let rollButton = Math.floor(Math.random()* 6 + 1);
// console.log(randon);
// ');
// showAllRolls.addEventListener ("click", function);
// resetButton.addEventListener ("click", function);

// //Create a variable, named dieRolls, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)
// Add a click event listener for your "Roll!" button. (1 point)
// On click, you need to get the value from the text input box, so that you know how many dice to roll. Assign this to a variable within your event listener. (1 point)
// Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
// Push the result of each roll onto your dieRolls array. (2 points)
// Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)/