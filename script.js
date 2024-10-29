// Function to get the user's name and display it
function askForName() {
    const name = prompt("What's your name?");
    document.getElementById("name").innerText = name || "friend"; // Default to "friend" if no name is provided
}

// Call the function when the page loads
window.onload = askForName;
