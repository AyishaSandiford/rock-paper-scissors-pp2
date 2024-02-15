/**
 * Assigns HTML elements to variables
 */
const howToPlaySec = document.getElementById('howToPlaySec');
const homeSec = document.getElementById('intro');
const playSec = document.getElementById('play')
const youChoiceLabel = document.getElementById('youChoiceLabel');
const cpuChoiceLabel = document.getElementById('cpuChoiceLabel');
const youScoreLabel = document.getElementById('youScoreLabel');
const cpuScoreLabel = document.getElementById('cpuScoreLabel');
const winner = document.getElementById('winner');
const winnerLabel = document.getElementById('winnerLabel');
const roundResultLabel = document.getElementById('roundResultLabel');
const currentRound = document.getElementById('currentRound');
const currentRoundLabel = document.getElementById('currentRoundLabel');
const nextRoundLabel = document.getElementById('nextRoundLabel');
const nextRound = document.getElementById('nextRound');


/**
 * Buttons
 */
const backBtn = document.getElementById('backBtn');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const startBtn = document.getElementById('startBtn');
const homeBtn = document.getElementById('homeBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const resetBtn = document.getElementById('resetBtn');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

/**
 * Listens for when a button is click and performs the function
 */
howToPlayBtn.addEventListener('click', navPageHow );
backBtn.addEventListener('click', navPageHome );
startBtn.addEventListener('click',navPagePlay);
homeBtn.addEventListener('click', navPageHome);
resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', playAgain);
rockBtn.addEventListener('click', rockChosen);
paperBtn.addEventListener('click', paperChosen);
scissorsBtn.addEventListener('click', scissorsChosen);

/**
 * Assigns Play Names to button Values
 */
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
};

const options = [
    'rock',
    'paper',
    'scissors',
];

/**
 * Functionality of the game
 * @param youChoice - The player choice eg: rock, paper, scissors
 */
function play(youChoice) {
    game.you.choice = youChoice;
    assignCpuChoice();

    youChoiceLabel.innerHTML = options[game.you.choice];
    cpuChoiceLabel.innerHTML = options[game.cpu.choice];

    /**
     * Assign the judge function to the variable result
     *
     * Judge returns 'you' if you won,
     'cpu' if the computer won
     and false if it's a tie
     */
    const result = judge();
    assignPoints(result);

    youScoreLabel.innerHTML = game.you.score;
    cpuScoreLabel.innerHTML = game.cpu.score;

    /**
     * find out who reach 5 first
     * Check to see if the cpu score is equal to 5 or if the user score is equal to 5
     */
    if (game.cpu.score === 5 || game.you.score === 5) {
        // If the CPU SCORE === 5 update innerHTML to say 'CPU'
        if(game.cpu.score === 5) {
            winner.innerHTML = 'CPU';
        }
        // If the player SCORE === 5 update innerHTML to say 'YOU'
        if(game.you.score === 5) {
            winner.innerHTML = 'YOU';
        }
        winnerLabel.style.display = 'block';
        nextRoundLabel.style.display = 'none';
        currentRoundLabel.style.display = 'none';
        disablePlayButtons();
        playAgainBtn.style.display = 'block';
        resetBtn.style.display = 'none';
        return;
    }

    // Display the name/results of the winners/ ties for each round
    if (result === 'cpu') {
        roundResultLabel.innerHTML = 'CPU Won';
    }

    if (result === 'you') {
        roundResultLabel.innerHTML = 'You Won';
    }

    if (result === false) {
        roundResultLabel.innerHTML = "It's a tie";
    }
    // Increases the value of each round when a player wins
    currentRound.innerHTML = game.round;
    game.round = game.round + 1;

    nextRound.innerHTML = game.round;
    nextRoundLabel.style.display = 'block';
}

/**
 * Increases points to both the player and computer if they win a round
 * @param result - This variable is assigned to a function which determines who won the match
 */
function assignPoints(result) {
    if (result === false) {
        return;
    }

    if (result === 'you') {
        game.you.score = game.you.score + 1;
    }

    if (result === 'cpu') {
        game.cpu.score = game.cpu.score + 1;
    }
}

/**
 * Determines the rules of the game
 */
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

/**
 * Calls to the Rock value
 */
function rockChosen() {
    play(ROCK);
}

/**
 * Calls to the Paper value
 */
function paperChosen() {
    play(PAPER);
}

/**
 * Calls to the Scissors value
 */
function scissorsChosen() {
    play(SCISSORS);
}

/**
 * Allows the computer to generate a random number 0 - 2 and saves it as it choice
 * in the computer choice variable
 */
function assignCpuChoice() {
    game.cpu.choice = Math.floor(Math.random() * 3);
}

/**
 * Takes you to the intro Screen and calls the 'playAgain' Function
 */
function navPageHome() {
    showIntro();
    playAgain();
}

/**
 * Hides all screens but shows 'how to play' screen
 */
function navPageHow() {
    hideAllScreens();
    howToPlaySec.style.display = 'block';
}

/**
 * Hides all screens but shows Game Screen
 */
function navPagePlay() {
    hideAllScreens();
    playSec.style.display ='block';

}

/**
 * Hides all screens but shows Intro Screen
 */
function showIntro() {
    hideAllScreens();
    homeSec.style.display = 'block';
}

/**
 * Hides All Section Elements
 */
function hideAllScreens() {
    const sections = document.getElementsByTagName('section');
    for (const section of sections) {
        section.style.display = 'none';
    }
}

/**
 * Disables the Rock, Paper and Scissors Buttons
 */
function disablePlayButtons() {
    const playButtons = document.getElementsByClassName('playBtn');
    for (const playButton of playButtons) {
        playButton.disabled = true;
    }
}

/**
 * Re-enables the Rock, Paper and Scissors Buttons
 */
function enablePlayButtons() {
    const playButtons = document.getElementsByClassName('playBtn');
    for (const playButton of playButtons) {
        playButton.disabled = false;
    }
}

/**
 * Resets the values of all scores, rounds and choices to their default values
 */
function resetGame() {
    // update the innerHTML for you choice to waiting
    youChoiceLabel.innerHTML = 'waiting';
    // update the innerHTML for you choice to waiting
    cpuChoiceLabel.innerHTML = 'waiting';

    currentRound.innerHTML = '1';
    roundResultLabel.innerHTML = 'Pending';

    nextRoundLabel.style.display = 'none';

    youScoreLabel.innerHTML = '0';
    cpuScoreLabel.innerHTML = '0';

    game.you.score = 0;

    game.cpu.score = 0;

    game.cpu.choice = null;

    game.you.choice = null;

    game.round = 1;
}

/**
 * This function is called when the 'play again' button is clicked
 * Allows the game to return to its default state
 */
function playAgain() {
    hide(winnerLabel);
    resetGame();
    currentRoundLabel.style.display = 'block';
    enablePlayButtons();
    playAgainBtn.style.display = 'none';
    resetBtn.style.display = 'block';

}

/**
 * Hides elements
 * @param element - HTML elements
 */
function hide(element) {
    element.style.display = 'none';
}

/**
 * Allows the Intro Page to be shown when the page is load
 */
showIntro();

