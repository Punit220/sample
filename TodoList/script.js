var list = [];
var boxChecked = true;
// var checkBox;

function addItem() {
  let element = document.getElementById("textField").value;

  if (element === "") {
    return;
  }

  // add element to list of array
  list.push(element);
  document.getElementById("textField").value = "";

  // console.log('List after adding items',list);

  //create list element
  var item = document.createElement("li");
  var textNode = document.createTextNode(element);
  item.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );

  item.addEventListener("click", function () {
    change(item);
  });

  // creating check-box for list item
  checkBox = document.createElement("input");
  checkBox.setAttribute("class", "form-check-input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkBoxId");

  // create remove button for list item
  const newButton = document.createElement("button");
  newButton.textContent = "x";
  newButton.setAttribute("type", "button");
  newButton.setAttribute("class", "btn btn-danger btn-sm m-1");
  newButton.addEventListener("click", function () {
    removeItem(item, element);
  });

  item.appendChild(checkBox);
  item.appendChild(textNode);
  item.appendChild(newButton);
  document.getElementById("itemList").appendChild(item);
  document.getElementsByTagName("li");
}

function removeItem(item, value) {
  const index = list.indexOf(value);
  if (index > -1) {
    list.splice(index, 1);
  }
  (",");
  item.remove();

  console.log("list After Removing items", list);
}
console.log("list After Removing items", list);

function change(item) {
  const checkBox = item.querySelector("input[type='checkbox']");
  if (checkBox.checked) {
    item.style.backgroundColor = "white";
    checkBox.checked = false;
  } else {
    item.style.backgroundColor = "#D3F1DF";
    checkBox.checked = true;
  }
}
