// Fetch API
// Fetch API Uses JavaSript Promise

document.getElementById("get_data").addEventListener('click', getData);

// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// Arrow Function

function getData() {
    fetch('http://api.icndb.com/jokes/randomdata')
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
}