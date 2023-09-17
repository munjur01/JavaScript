// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

document.getElementById('sample-btn').addEventListener('click', message);
// document.getElementById('sample-btn').addEventListener('dblclick', message);

function message() {
    console.log("Button Clicked");
}