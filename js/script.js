const backBtn = document.getElementById('backBtn');
const howToPlaySec = document.getElementById('howToPlaySec');
const homeSec = document.getElementById('intro');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const playSec = document.getElementById('play')
const startBtn = document.getElementById('startBtn');
const homeBtn = document.getElementById('homeBtn');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const youChoiceLabel = document.getElementById('youChoiceLabel')
const cpuChoiceLabel = document.getElementById('cpuChoiceLabel')


howToPlayBtn.addEventListener('click', navPageHow);
backBtn.addEventListener('click', navPageHome);
startBtn.addEventListener('click', navPagePlay);
homeBtn.addEventListener('click', navPageHome);
rock.addEventListener('click', rockChosen);
paper.addEventListener('click', paperChosen);
scissors.addEventListener('click', scissorsChosen);


let game = {
    round: 1,
    you: {
        choice: null,
        score: 0,
    },
    cpu: {
        choice: null,
        score: 0,
    }
}

const options = [
    'rock',
    'paper',
    'scissors',
]

function play(youChoice) {
    game.you.choice = youChoice;
    assignCpuChoice();

    youChoiceLabel.innerHTML = options[game.you.choice];
    cpuChoiceLabel.innerHTML = options[game.cpu.choice];
}

function rockChosen() {
    play(0);
}

function paperChosen() {
    play(1);
}

function scissorsChosen() {
    play(2);
}

// Generates a random play for the computer
function assignCpuChoice() {
    game.cpu.choice = Math.floor(Math.random() * 3)
}

function judge() {

    if (game.you.choice === game.cpu.choice) {
        return false;
    }

    if (game.you.choice === 0 && game.cpu.choice === 2) {
        return 'you';
    }

    if (game.you.choice === 1 && game.cpu.choice === 0) {
        return 'you';
    }

    if (game.you.choice === 2 && game.cpu.choice === 1 ) {
        return 'you';
    }
    return 'cpu';
}


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
