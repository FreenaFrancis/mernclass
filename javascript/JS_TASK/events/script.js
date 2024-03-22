// Get the button element by its id
const button = document.getElementById('myButton');

// Create a function to be executed when the button is clicked
function handleClick() {
    alert('mouseover clicked!');
}

// Add a click event listener to the button element
button.addEventListener('mouseover', handleClick);
