const number = document.getElementById('number');
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const reset = document.getElementById("reset");

let tempNumber = 0;
sub.addEventListener("click", function () {
    
    tempNumber--;
    number.textContent = tempNumber;
    color(tempNumber);
});

add.addEventListener("click", function () {
    tempNumber++;
    number.textContent = tempNumber;
    color(tempNumber);


});


reset.addEventListener("click", function () {
    
    
    tempNumber = 0;
    number.textContent = tempNumber;

    color(tempNumber);

});

function color(value) {

if (value > 0) {
    document.body.style.backgroundColor = "green";
} else if (value  < 0) {
    document.body.style.backgroundColor = "red";
    
}

else if (value  == 0) {
    document.body.style.backgroundColor = "white";
    
}


    
}

