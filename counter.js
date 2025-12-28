const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const counterDisplay = document.getElementById('js');
const resetButton = document.getElementById('reset');
let Interval;
let count = 0;


startButton.addEventListener('click', function() {
    Interval = setInterval(counter, 1000);
});


stopButton.addEventListener('click', function() {
    clearInterval(Interval);
});

resetButton.addEventListener('click', function() {
    clearInterval(Interval);
    count = 0;
    counterDisplay.innerText = count;
});


function counter() {
    count += 1;
    console.log(count);
    counterDisplay.innerText = count;
}