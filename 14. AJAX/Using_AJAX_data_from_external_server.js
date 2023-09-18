// https://api.api-ninjas.com/v1/jokes
// API
// RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
    let number = document.getElementById('numberJokes').value;
    //console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.api-ninjas.com/v1/jokes?limit=${number}`, true);
    xhr.setRequestHeader('X-Api-Key', 'tdSI+SyBA+WwiH6ks2Sgsg==kFNInEG3v01rOLTk');

    xhr.onloadstart = function () {
        document.getElementById('output').innerHTML = '<h3>Loading....</h3>';
    };

    xhr.onload = function () {
        console.log('loaded');
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data;
            let output = '<ol>';

            jokes.forEach(function (item) {
                //console.log(item.joke);
                output += `<li>${item.joke}</li>`;
            });
            output += '</ol>';

            document.getElementById('output').innerHTML = output;
        }
    };

    xhr.send();
}