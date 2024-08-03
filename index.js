let drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        let drumsInnerHTML = this.innerHTML
        console.log(drumsInnerHTML);
        makeSound(drumsInnerHTML);
        drumAniamation(drumsInnerHTML);
        
        

    })
}

// keyboard Event

document.addEventListener("keypress", function (event) {
    let keyPressed = event.key;
    let drumsInnerHTML = event.key;
    console.log(keyPressed);
    makeSound(keyPressed);
    drumAniamation(keyPressed);
    
})


function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(this)
            break;
    }
}


// By class name
function drumAniamation(currentKey){
    let buttonActiaved=document.querySelector(`.${currentKey}`);
    buttonActiaved.classList.add("pressed");
    setTimeout(function(){
        buttonActiaved.classList.remove("pressed");

    },200);
}

