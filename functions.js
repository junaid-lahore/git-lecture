// document.addEventListener("mousemove", function(event) {
//     console.log("Mouse X: " + event.clientX + ", Mouse Y: " + event.clientY);
// });

const btn = document.getElementById("btn");
const testElement = document.getElementById("js");
const inputField = document.getElementById("inputField");
window.addEventListener("load", function() {
    console.log("Page is fully loaded");
});


// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
//     testElement.innerHTML = "Welcome!";
// });
// inputField.addEventListener("input", function(event) {
//     console.log("Key pressed: " + event.data);
//     if (event.key === "Enter") {
//         testElement.innerHTML = "You pressed Enter!";
//     }
// });

// btn.addEventListener("mouseover", function() {
//     btn.style.backgroundColor = "yellow";
//     console.log("Mouse over event triggered");
// });

// btn.addEventListener("mouseout", function() {
//     btn.style.backgroundColor = "white";
//     console.log("Mouse out event triggered");
// }); 

// btn.addEventListener("mousedown", function() {
//     btn.style.backgroundColor = "lightblue";
//     testElement.innerHTML = Date();
//     console.log("Button clicked");  
// });

// btn.addEventListener("mouseup", function() { 
//     console.log("Mouse button released");
//     btn.style.backgroundColor = "red";
// }); 

function myFunction(x, y, z) {
    return x + y + z;
}

let myFunction2 = function(x,y) {
    let testVar = 456;
    return x * y;
}

let myArrowFunction = (a,b) => a + b;


function displayDate() {
    document.getElementById("heading").innerHTML = Date();
};