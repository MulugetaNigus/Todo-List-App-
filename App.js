// alert("hello");
// localStorage.clear();

// grabing html elements for better manipulation
const input = document.getElementById("inputTask");
const Add_Btn = document.getElementById("addTask");
const Virtual_Cart_Item = document.getElementById("Display-Virtual-Cart-Item");
const AddSomething = document.getElementById("AddSomethingMsg");
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// collections of rgb color to generator random background color for our generated item
function RGBColor() {
  const ColorItems = [
    "rgb(255, 0, 102)",
    "rgb(255, 255, 0)",
    "rgb(0, 153, 255)",
    "rgb(0, 153, 0)",
    "rgb(213, 255, 128)",
    "rgb(255, 255, 204)",
    "rgb(204, 153, 0)",
    "rgb(102, 51, 0)",
    "rgb(204, 51, 0)",
    "rgb(0, 51, 102)",
    "rgb(102, 102, 153)",
    "rgb(102, 153, 153)",
    "rgb(153, 0, 153)",
    "rgb(0, 204, 255)",
    "rgb(153, 153, 102)",
  ];
  const randomSelector = Math.floor(Math.random() * 15);
  return ColorItems[randomSelector];
}

// when the add to cart button click the following code will be excutes
Add_Btn.addEventListener("click", function () {
  const Input = input.value;

  if (input.value == "") {
    alert("You Can Not Add Empty Task");
    return false;
  } else {
    // localStorage for storing our tasks
    savedTasks.push(Input);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  }

  // to remove the add something text form our card body
  AddSomething.style.display = "none";

  // creating virtual card items
  const newCart = document.createElement("div");
  newCart.style.width = "300px";
  newCart.style.height = "50px";
  newCart.style.backgroundColor = `${RGBColor()}`;
  newCart.style.borderRadius = "5px";
  newCart.style.textAlign = "center";
  newCart.style.display = "flex";
  newCart.style.margin = "auto";
  newCart.style.marginTop = "8px";
  newCart.style.marginBottom = "8px";
  newCart.style.justifyContent = "center";
  newCart.style.alignItems = "center";
  newCart.style.fontSize = "22px";
  newCart.style.padding = "0px";
  newCart.style.cursor = "Pointer";
  newCart.style.padding = "auto";
  newCart.style.overflow = "hidden";
  newCart.textContent = Input;

  Virtual_Cart_Item.appendChild(newCart);

  input.value = "";

  // reload the page to save our todos in localstorage
  window.location.reload();

  // to delete the items from our cart
  newCart.addEventListener("dblclick", function () {
    //newCart.style.textDecoration = "line-through";
    Virtual_Cart_Item.removeChild(newCart);
  });
});

// read previous tasks. If no tasks were found, start with an empty list
savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// rendering our localstorage and display previous data
for (let items of savedTasks) {
  // clearing some befor formatting
  AddSomething.style.display = "none";
  // creating virtual card items
  const newCart = document.createElement("div");
  newCart.style.width = "300px";
  newCart.style.height = "50px";
  newCart.style.backgroundColor = `${RGBColor()}`;
  newCart.style.borderRadius = "5px";
  newCart.style.textAlign = "center";
  newCart.style.display = "flex";
  newCart.style.margin = "auto";
  newCart.style.marginTop = "8px";
  newCart.style.marginBottom = "8px";
  newCart.style.justifyContent = "center";
  newCart.style.alignItems = "center";
  newCart.style.fontSize = "22px";
  newCart.style.padding = "0px";
  newCart.style.cursor = "Pointer";
  newCart.style.padding = "auto";
  newCart.style.overflow = "hidden";
  newCart.textContent = items;

  Virtual_Cart_Item.appendChild(newCart);

  input.value = "";

  newCart.addEventListener("click", function () {
    // newCart.addEventListener("dblclick" , () => {
    newCart.style.textDecoration = "line-through";
    newCart.style.opacity = ".5";
    // })
  });

  newCart.addEventListener("dblclick", function () {
    // newCart.addEventListener("dblclick" , () => {
    newCart.style.textDecoration = "none";
    newCart.style.opacity = "1";
    // })
  });
}

// to delete all todo lists from localStorage
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
  // asking user persmission to clear the localStorage
  let userPermission = window.confirm("Do You Want To Delete Your All Task ?");
  userPermission
    ? localStorage.removeItem("tasks") + window.location.reload()
    : window.location.reload();
});
