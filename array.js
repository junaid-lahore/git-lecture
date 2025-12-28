const test = document.getElementById("js");

const myArray = [10, 20, 30, 40, "fifty"];
const myArray2 = [];
myArray2[10] = "Hello";
const myString = "xyz"
const myArray3 = new Array("apple", "banana", "cherry", 100, 200, "dates");
myArray3.push("orange");
myArray3.pop();
// console.log(myArray3[myArray3.length - 1]);
myArray3.length = 10;
myArray3.shift()
myArray3.unshift("kiwi");
delete myArray3[2];
const concatedArray = myArray.concat(myArray3);
console.log(concatedArray);
// console.log(myArray.toString());
// console.log(Array.isArray(myArray));

// let text = "<ul>";

// for (let i = 2; i < myArray3.length; i++) {
//     text += "<li>" + myArray3[i] + "</li>";
// }
// text += "</ul>";
// test.innerHTML = text;