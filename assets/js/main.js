// id is # class is .

const dieRolls = [];
const rollButton = document.querySelector("#roll_button");
// const resetButton = document.querySelector("#reset_button");
const sumTotal = document.querySelector("#all_sum");
const showAll = document.querySelector("#all_rolls");
const displayRolls = document.querySelector("#rolls_display");

let numberTotal = 0;

rollButton.addEventListener("click", function () {
    let i = 0;
    let number;
    const dieTotal = document.getElementById("totaldices").value;
    while (i < dieTotal) {
        number = Math.floor(Math.random() * 6) + 1;
        numberTotal += number;
        dieRolls.push(number);
        i += 1;
    }
    sumTotal.innerHTML = numberTotal;
})

showAll.addEventListener("click", function () {
    let i = 0;
    while (i < dieRolls.length) {
        const newDiceString = '<li class="dice">' + dieRolls[i] + "</li>";
        displayRolls.innerHTML += newDiceString;
        i++;
    }
})
