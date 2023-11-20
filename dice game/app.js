function roll(){
    let dice = document.getElementById('dice')
    let random = Math.floor(Math.random()*6);
    let diceAudio = document.getElementById('diceAudio');
    diceAudio.play();
    dice.innerText = '';
    dice.classList.add('animate-dice')
    setTimeout(() => {
        dice.classList.remove('animate-dice');
        dice.innerText = random + 1;
    }, 1000);
}


// js events
// event listeners
// local storage
// data attribute