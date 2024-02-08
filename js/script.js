const backBtn = document.getElementById('backBtn');
const howToPlaySec = document.getElementById('howToPlaySec');
const homeSec = document.getElementById('intro');
const howToPlayBtn = document.getElementById('howToPlayBtn');
playSec = document.getElementById('play')
const startBtn = document.getElementById('startBtn');


howToPlayBtn.addEventListener('click', navPageHow);
backBtn.addEventListener('click', navPageHome);
startBtn.addEventListener('click', navPagePlay);




// Hide All Screens
function hideAllScreens() {
    const sections = document.getElementsByTagName('section')
    for (const section of sections) {
        section.style.display = 'none'
    }
}

function navPageHome() {
    showIntro();
}

function navPagePlay() {
    hideAllScreens();
    playSec.style.display ='block';
}


// This Function Shows the How To Play Screen
function navPageHow() {
    hideAllScreens();
    howToPlaySec.style.display = 'block';
}


function showIntro() {
    hideAllScreens();
    homeSec.style.display = 'block';
}

// This Function is called so that the Intro screen is displayed when the page loads
showIntro();
