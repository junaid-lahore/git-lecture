let fruits = ["apple", "banana", "cherry", "date", "elderberry" ];
// console.log(fruits.length);
// console.log(fruits[3][2]);
for (let i = 1; i < fruits.length; i++) {
    if (fruits[i] === "cherry") {
        break;
    }
    console.log(fruits[i]);
}

// for (let fruit of fruits) {
//     console.log(fruit);
// }
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}