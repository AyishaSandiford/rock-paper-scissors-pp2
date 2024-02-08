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
const youScoreLabel = document.getElementById('youScoreLabel');
const cpuScoreLabel = document.getElementById('cpuScoreLabel');
const winner = document.getElementById('winner')
const winnerLabel = document.getElementById('winnerLabel');
const roundResultLabel = document.getElementById('roundResultLabel');
const currentRound = document.getElementById('currentRound');
const currentRoundLabel = document.getElementById('currentRoundLabel');
const nextRoundLabel = document.getElementById('nextRoundLabel');
const nextRound = document.getElementById('nextRound');
const resetBtn = document.getElementById('resetBtn');



const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors');





howToPlayBtn.addEventListener('click', navPageHow );
backBtn.addEventListener('click', navPageHome );
startBtn.addEventListener('click',navPagePlay);
homeBtn.addEventListener('click', navPageHome);
resetBtn.addEventListener('click', resetGame);



rockBtn.addEventListener('click', rockChosen);
paperBtn.addEventListener('click', paperChosen);
scissorsBtn.addEventListener('click', scissorsChosen);

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

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

    /* Judge returns 'you' if you won,
    'cpu' if the computer won
    and false if it's a tie */
    const result = judge();
    assignPoints(result);

    youScoreLabel.innerHTML = game.you.score;
    cpuScoreLabel.innerHTML = game.cpu.score;

    // Check to see if the cpu is = to 5 or if the user is = to 5
    if (game.cpu.score === 5 || game.you.score === 5) {
        // find out who reach 5
        // If cpu SCORE === 5 update innerHTML to say 'CPU'
        if(game.cpu.score === 5) {
            winner.innerHTML = 'CPU';
        }
        // If you SCORE === 5 update innerHTML to say 'YOU'
        if(game.you.score === 5) {
            winner.innerHTML = 'YOU'
        }
        winnerLabel.style.display = 'block';
        nextRoundLabel.style.display = 'none';
        currentRoundLabel.style.display = 'none';
        disablePlayButtons();
        resetBtn.style.display = 'none';
        return;
    }

    // Display the name of the winner of each round
    if (result === 'cpu') {
        roundResultLabel.innerHTML = 'CPU Won';
    }

    if (result === 'you') {
        roundResultLabel.innerHTML = 'You Won';
    }

    if (result === false) {
        roundResultLabel.innerHTML = "It's a tie";
    }

    currentRound.innerHTML = game.round;
    game.round = game.round + 1;

    nextRound.innerHTML = game.round;
    nextRoundLabel.style.display = 'block';
}

function assignPoints(result) {
    if (result === false) {
        return;
    }

    if (result === 'you') {
        game.you.score = game.you.score + 1
    }

    if (result === 'cpu') {
        game.cpu.score = game.cpu.score + 1
    }
}

function judge() {

    if (game.you.choice === game.cpu.choice) {
        return false;
    }

    if (game.you.choice === ROCK && game.cpu.choice === SCISSORS) {
        return 'you';
    }

    if (game.you.choice === PAPER && game.cpu.choice === ROCK) {
        return 'you';
    }

    if (game.you.choice === SCISSORS && game.cpu.choice === PAPER ) {
        return 'you';
    }
    return 'cpu';
}

function rockChosen() {
    play(ROCK);
}

function paperChosen() {
    play(PAPER);
}

function scissorsChosen() {
    play(SCISSORS);
}


function assignCpuChoice() {
    game.cpu.choice = Math.floor(Math.random() * 3)
}

function navPageHome() {
    showIntro();

}

function navPageHow() {
    hideAllScreens();
    howToPlaySec.style.display = 'block';
}

function navPagePlay() {
    hideAllScreens();
    playSec.style.display ='block';

}

function showIntro() {
    hideAllScreens();
    homeSec.style.display = 'block';
}


function hideAllScreens() {
    const sections = document.getElementsByTagName('section')
    for (const section of sections) {
        section.style.display = 'none'
    }
}

function disablePlayButtons() {
    const playButtons = document.getElementsByClassName('playBtn')
    for (const playButton of playButtons) {
        playButton.disabled = true;
    }
}



function resetGame() {
    // update the innerHTML for you choice to waiting
    youChoiceLabel.innerHTML = 'waiting';
    // update the innerHTML for you choice to waiting
    cpuChoiceLabel.innerHTML = 'waiting';

    currentRound.innerHTML = '1';
    roundResultLabel.innerHTML = 'Pending';

    nextRoundLabel.style.display = 'none';

    youScoreLabel.innerHTML = '0';
    cpuScoreLabel.innerHTML = '0'

    game.you.score = 0;

    game.cpu.score = 0;

    game.cpu.choice = null;

    game.you.choice = null;

    game.round = 1

    // Refreshes the text on the page to reflect these values
}

showIntro();

