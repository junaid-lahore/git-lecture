const person = {
    name: "Junaid",
    age: 30,
    city: "Vehari",
    fullName: function() {
        return this.name + " from " + this.city;
    }
};

const car = new Object({
    name: "Junaid",
    age: 30,
    city: "Vehari"
});
let x = "city";

car.name = "alto";
car.model = 2025;
car["color"] = "red";
console.log(person.name);
console.log(person[x]);
console.log(car);

let text = "";

for (let key in person) {
    text += person[key];
}

//code written at github.com

console.log(Object.entries(car));

const fruits = {banana:100, orange:200, apple:300};

for (let [key, value] of Object.entries(fruits)) {

    console.log(key + ": " + value);
}

const myArray = ["Junaid", "Ali", "Ahmed"];

for (let x of myArray) {
    console.log(x);
}

let text2 = "";

text2 = JSON.stringify(person);
console.log(text2);
// console.log(text);
