const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector("assigned-items");

// Find the button with class "invite"
const addGuestButton = document.querySelector(".invite");

// Find the label associated with the guest input
const guestInputLabel = document.querySelector(".add-guest label");

// Find the text input box where users can enter guest names
const guestInput = document.querySelector(".add-guest input");

// Find the unordered list where the guest names will be displayed
const guestList = document.querySelector(".guest-list");

// Find the span where the number of guests attending will be displayed
const guestCount = document.querySelector(".attendance");

// Find the alert that will show up when the guest list is full
const guestFull = document.querySelector(".alert");

// Add an event listener to the "invite" button
addGuestButton.addEventListener("click", function () {
  // Get the value entered in the text input box
  const guest = guestInput.value;

  // Check if the input is not empty
  if (guest !== "") {
    // If not empty, add the guest to the list
    addToList(guest);

    // Update the guest count
    updateGuestCount();

    // Clear the input box after adding the guest
    clearInput();
  }
});

// Function to clear the input box
const clearInput = function () {
  guestInput.value = "";
};

// Function to add a guest to the list
const addToList = function (guest) {
  // Create a new list item
  const listItem = document.createElement("li");

  // Set the text of the list item to the guest's name
  listItem.innerText = guest;

  // Append the list item to the guest list
  guestList.append(listItem);
};

// Function to update the guest count
const updateGuestCount = function () {
  // Get all the list items in the guest list
  const guests = document.querySelectorAll(".guest-list li");

  // Update the guest count displayed
  guestCount.innerText = guests.length;

  // If the guest list is full (8 guests), hide the input elements and show the "guestFull" alert
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

// Function to assign potluck items to guests
const assignItems = function () {
  // List of available potluck items
  const potluckItems = [
    "cheese",
    "crackers",
    "fresh fruit",
    "coleslaw",
    "apple cake",
    "gazpacho",
    "baguette",
    "egg salad",
    "potato salad",
    "summer rolls",
    "hummus",
    "cookies",
  ];

  // Get all the guest list items
  const allGuests = document.querySelectorAll(".guest-list li");

  // Loop through each guest
  for (let guest of allGuests) {
    // Generate a random index to select a potluck item
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);

    // Select a random potluck item using the random index
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    // Create a new list item to display the assigned item for the guest
    let listItem = document.createElement("li");

    // Set the text of the list item to indicate what the guest is bringing
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;

    // Append the list item to the assigned items list
    assignedItems.append(listItem);

    // Remove the assigned potluck item from the list of available items to avoid duplication
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

// Find the button that triggers the assignment of potluck items
const assignButton = document.querySelector(".assign");

// Add an event listener to the assign button
assignButton.addEventListener("click", function () {
  // Call the function to assign potluck items to guests
  assignItems();

  // Disable the assign button after it's clicked to prevent multiple assignments
  assignButton.disabled = true;
});
