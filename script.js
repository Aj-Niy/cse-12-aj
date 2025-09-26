// Display the current time on load
const timeElement = document.getElementById('timestamp-message');
const now = new Date();
timeElement.textContent += now.toLocaleString(); 

// a simple click event to a button
const button = document.getElementById('alert-button');

function showAlert() {
    // pop-up box
    alert("Project Alert: You clicked the button! Basic JavaScript works.");
}

// Attach the function to the button's click event
button.addEventListener('click', showAlert);