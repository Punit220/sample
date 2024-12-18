var one = 0;
var res = 0;
var textboxValue = document.getElementById("textField");
var operatorPressed = false;


function makeNumber(input) {
  if (textboxValue.value === "" && ['+', '-', '*', '/','.'].includes(input)) {
    return; 
  }
  if (["+", "-", "*", "/","."].includes(input)) {
    if (operatorPressed) {
      textboxValue.value = textboxValue.value.slice(0, -1) + input;
    } else {
      textboxValue.value = textboxValue.value + input;
      operatorPressed = true;
    }
  } else {
    textboxValue.value = textboxValue.value + input;
    operatorPressed = false;
  }
}

function calculate() {

  if(operatorPressed){
    return;
  }

  res = eval(textboxValue.value)

  // if (textboxValue.value.includes("+") == true) {
  //   var splittedValue = textboxValue.value.split("+");
  //   res = parseInt(splittedValue[0]) + parseInt(splittedValue[1]);
  // } else if (textboxValue.value.includes("-") == true) {
  //   var splittedValue = textboxValue.value.split("-");
  //   res = parseInt(splittedValue[0]) - parseInt(splittedValue[1]);
  // } else if (textboxValue.value.includes("*") == true) {
  //   var splittedValue = textboxValue.value.split("*");
  //   res = parseInt(splittedValue[0]) * parseInt(splittedValue[1]);
  // } else if (textboxValue.value.includes("/") == true) {
  //   var splittedValue = textboxValue.value.split("/");
  //   res = parseInt(splittedValue[0]) / parseInt(splittedValue[1]);
  // }

  document.getElementById("textField").value = res;
}

function clearFunction() {
  document.getElementById("textField").value = "";
}
