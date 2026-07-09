let lightbulb = document.getElementById("lightbulb");
let onButton = document.getElementById("onButton");
let offButton = document.getElementById("offButton");
let isOn = false;
onButton.addEventListener("click", function() {
    isOn = true;
    lightbulb.style.borderColor = "yellow";
    lightbulb.style.backgroundColor = "lightyellow";
});

offButton.addEventListener("click", function() {
    isOn = false;
    lightbulb.style.borderColor = "black";
    lightbulb.style.backgroundColor = "white";
});
