let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let additionButton = document.querySelector("#addButton");
let subtractionButton = document.querySelector("#subtractButton");
let multiplicationButton = document.querySelector("#multiplyButton");
let divisionButton = document.querySelector("#divideButton");
let outputField = document.querySelector("#output");

//add function to add 2 inputted numbers
function add() {
  let addition1 = Number(input1.value);
  let addition2 = Number(input2.value);
  let sum = addition1 + addition2;
  outputField.value = sum;
}

//call add() function with the addition button
additionButton.onclick = function () {
  add();
};

//other way to the same thing
//additionButton.onclick = () => add();

//subtract function to subtract 2 inputted numbers
function subtract() {
  let subtraction1 = Number(input1.value);
  let subtraction2 = Number(input2.value);
  let difference = subtraction1 - subtraction2;
  outputField.value = difference;
}

//call subtract() function with the subtraction button
subtractionButton.onclick = () => subtract();

//multiply function to multiply 2 inputted numbers
function multiply() {
  let multiplication1 = Number(input1.value);
  let multiplication2 = Number(input2.value);
  let product = multiplication1 * multiplication2;
  outputField.value = product;
}

//call multiply() function with the multiplication button
multiplicationButton.onclick = () => multiply();

//divide function to divide 2 inputted numbers
function divide() {
  let division1 = Number(input1.value);
  let division2 = Number(input2.value);
  let quotient = division1 / division2;
  outputField.value = quotient;
}

//call divide() function with the division button
divisionButton.onclick = () => divide();
