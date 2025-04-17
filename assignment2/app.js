
// This is a simple grocery list application that allows users to add items to a list and displays the list of groceries.

//groceries is an array that will hold the grocery items
let groceries = [];

// Select the input field and the list element from the HTML document
let itemInput = document.getElementById("itemInput");

let groceriesList = document.getElementById("groceriesList");

let addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", addItem);

function renderList() {
    groceriesList.innerHTML = ""; // Clear the list before rendering
    groceries.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        groceriesList.appendChild(li);
    }
    );
}

function addItem() {
    let item = itemInput.value;
    if (item) {
        groceries.push(item);
        itemInput.value = "";
    }
    renderList();
    console.log(groceries);
}
