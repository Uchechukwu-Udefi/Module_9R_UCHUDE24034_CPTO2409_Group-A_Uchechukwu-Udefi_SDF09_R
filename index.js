// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum < 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack)













/*
let age = 21

if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}


if (age < 100) {
    console.log("Not eligible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King")
} else {
    console.log("Not elegible, you have already gotten one")
}
*/