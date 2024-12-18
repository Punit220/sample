var operator = "";
var one = 0;
var res = 0;
var textboxValue = document.getElementById("textField");

function makeNumber(num) {
  textboxValue.value = textboxValue.value + num;
}

function operation(op) {
  operator = op;
  one = textboxValue.value;
  document.getElementById("textField").value = "";
}

function calculate() {
  if (operator = "+") {
    res = parseInt(one) + parseInt(textboxValue.value);
  } else if (operator = "-") {
    res = parseInt(one) - parseInt(textboxValue.value);
  } else if (operator = "*") {
    res = parseInt(one) * parseInt(textboxValue.value);
  } else if (operator = "/") {
    res = parseInt(one) / parseInt(textboxValue.value);
  }
  document.getElementById("textField").value = res;
}

function clearFunction() {
  document.getElementById("textField").value = "";
}




