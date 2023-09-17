// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

document.querySelector(".container").addEventListener('mousemove', message);

document.querySelector('.container').style.background = "red";

function message(e) {
    let val = e;
    val = e.target; // this
    val = e.target.id;

    val = e.timeStamp;
    val = e.type;

    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX;
    val = this;

    this.style.background = `#${e.offsetX}`;

    //console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);

}


// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

document.querySelector("#name").addEventListener('focus', test);

document.querySelector("#name").addEventListener('keyup', test2);

function test(e) {
    this.style.background = 'pink';
}

function test2(e) {
    //console.log(this.value);
    document.getElementById("demo").innerText = this.value;
}
