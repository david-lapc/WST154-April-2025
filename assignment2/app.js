
// This is a simple grocery list application that allows users to add items to a list and displays the list of groceries.

//groceries is an array that will hold the grocery items
let groceries = [];

// Select the input field and the list element from the HTML document
let itemInput = document.getElementById("itemInput");

let groceriesList = document.getElementById("groceriesList");

let addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(e);
    addItem();
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(e);
    addItem();
});


function renderList() {
    groceriesList.innerHTML = ""; // Clear the list before rendering
    groceries.forEach((item, index) => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerHTML = "&times;";

        button.className = "remove-button";
        button.addEventListener("click", () => {
            removeItem(item); // Remove the item from the list when the button is clicked
        });

        li.textContent = item + " ";
        li.appendChild(button);
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

// function removeItem(index) {
//     groceries.splice(index, 1); // Remove the item from the array
//     renderList(); // Re-render the list to reflect the changes
// }

function removeItem(item) {
    let index = groceries.indexOf(item); // Find the index of the item to be removed
    if (index !== -1) {
        groceries.splice(index, 1); // Remove the item from the array
        renderList(); // Re-render the list to reflect the changes
    }
}
