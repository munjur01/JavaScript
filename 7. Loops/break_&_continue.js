// break 
console.log("Start of Break");
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
console.log("End of Break");

console.log("Start of Continue");
// continue

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
console.log("End of Continue");