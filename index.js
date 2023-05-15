var buttons = document.getElementsByClassName("drum");
var audio;

for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click",function() {
        onClick(buttons[i].textContent);
        buttonAnimation(buttons[i].textContent);
    });
}

document.addEventListener("keydown", function(event) {
    onClick(event.key);
    buttonAnimation(event.key);
});

function onClick(key) {
    
    console.log(key);
    switch(key){
        case "w": 
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log("Unrecognised Event");
    }
}   

function buttonAnimation(key){

    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() { activeButton.classList.remove("pressed")} , 100);
}