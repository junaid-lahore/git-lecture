let age = 18;
let haveLicense = true;
let country = "pakistan";
if (age >= 18) {
// && operator
// || operator

    if (haveLicense || country === "pakistan") {
    console.log("You can drive");
    } else {
    console.log("You need a driving license to drive");
    }
} else if (age < 0) {
    console.log("Age cannot be negative");
} else {
    console.log("You cannot drive");
}