setInterval(showTime,1000);

const btn = document.getElementById("btn");
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(showAlert, 10000);
});

function showAlert(){
    alert("Button clicked 5 seconds ago");
};


function showTime(){
    const d = new Date();
    document.getElementById("js").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +         
    d.getSeconds();
};