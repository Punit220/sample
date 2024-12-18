var one = 0;
var res = 0;
var textboxValue = document.getElementById("textField");
var operatorPressed = false;
var operators = ["+", "-", "*", "/", "."];

// function makeNumber(num) {
//     //   textboxValue.value += num;
//     textboxValue.value = textboxValue.value + num;
//     // console.log('in number function', num);
// }

// function operation(op) {
//     operator = op;
//     one = textboxValue.value;
//     document.getElementById("textField").value = "";
// }

// function calculate() {
//     if (operator = "+") {
//         res = parseInt(one) + parseInt(textboxValue.value);
//     } else if (operator = "-") {
//         res = parseInt(one) - parseInt(textboxValue.value);
//     } else if (operator = "*") {
//         res = parseInt(one) * parseInt(textboxValue.value);
//     } else if (operator = "/") {
//         res = parseInt(one) / parseInt(textboxValue.value);
//     }
//     document.getElementById("textField").value = res;
// }

function makeNumber(input) {
  if (
    textboxValue.value === "" &&
    ["+", "-", "*", "/", ".", "="].includes(input)
  ) {
    return;
  }

  if (["+", "-", "*", "/", "."].includes(input)) {  
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
  if (
    textboxValue.value === "" &&
    ["+", "-", "*", "/", ".", "="].includes(input)
  ) {
    return;
  }

  res = eval(textboxValue.value);

  document.getElementById("textField").value = res;
}

function clearFunction() {
  document.getElementById("textField").value = "";
}

const container = document.getElementById("myContainer");

for (let i = 1; i < 10; i++) {
  const newButton = document.createElement("button");
  newButton.textContent = `${i}`;
  newButton.setAttribute("type", "button");
  newButton.setAttribute("class", "btn btn-secondary m-1");
  newButton.setAttribute("onclick", `makeNumber(${i})`);
  container.appendChild(newButton);
}

// const operatorContainer = document.getElementById("operatorContainer");

// operators.forEach(function myFunction(item) {  
//   const newButton = document.createElement("button");
//   newButton.textContent = item;
//   newButton.setAttribute("type","button");
//   newButton.setAttribute("id","opButton");
//   newButton.setAttribute("class","btn btn-primary m-1");
//   newButton.setAttribute("onclick",`makeNumber(${item})`);
//   operatorContainer.appendChild(newButton);
// });
