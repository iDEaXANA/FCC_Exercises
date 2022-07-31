'use strict'
//EXERCISES//
/////////////////// 1 ///////////////////
let firstName = "Bilal"
let lastName = "MB"

let fullName = firstName + " " + lastName

console.log(fullName)

/////////////////// 2 ///////////////////
let name = "Linda"
let greeting = "Hi there"
function prints() {
    let output = greeting + ", " + name + "!"
    console.log(output)
}
prints()
/////////////////// 3 ///////////////////
let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)
/////////////////// 4 ///////////////////
console.log("2" + 2) // = 22
console.log(11 + 7) // = 18
console.log(6 + "5") // = 65
console.log("My points: " + 5 + 9) // = My Points: 14 >> 59
console.log(2 + 2) // = 4
console.log("11" + "14") // = 1114
/////////////////// 5 ///////////////////
let errorMsg = document.getElementById("error")

function render() {
    console.log("button clicked")
    errorMsg.textContent = "Something went wrong, please try again"

}
/////////////////// 6 ///////////////////

/////////////////// 1 ///////////////////

/////////////////// 1 ///////////////////


