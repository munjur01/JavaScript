var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) {
        continue;
    }
    series += " + ";
}

console.log(`${series} = ${sum}`); 8