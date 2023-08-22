var fruits = ["Banana", "Orange","Apple","Mango"];

function loadFruits(){
    document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
    var fruit = promt("What is your favorite fruit? ");
    fruits[fruits.lenght] = fruits;
    document.getElementById("fruits").innerHTML = fruits;
    
}