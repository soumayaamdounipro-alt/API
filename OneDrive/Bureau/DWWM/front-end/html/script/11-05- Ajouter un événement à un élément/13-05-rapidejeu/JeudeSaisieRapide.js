// Sélectionner les éléments nécessaires
const letterDisplay = document.getElementById('letter-display');
const score = document.getElementById('score');
const timer = document.getElementById('timer');
const startGame = document.getElementById('start-game');

const currentKey = document.getElementById('current-key');
const currentCode = document.getElementById('current-code');
const currentKeycode = document.getElementById('current-keycode');
const resultStatus = document.getElementById('result-status');

const targetLetter = document.getElementById('target-letter');


// Variables du jeu
let gameScore = 0;
let timeLeft = 30;
let currentLetter = 'A';
let gameActive = false;

let gameTimer;


// Tableau des lettres
const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];


// Fonction lettre aléatoire
function generateRandomLetter(){

    currentLetter =
    letters[Math.floor(Math.random() * letters.length)];

    letterDisplay.textContent = currentLetter;
}


// Fonction démarrer
function startGameFunction(){

    gameScore = 0;
    timeLeft = 30;
    gameActive = true;

    score.textContent = gameScore;
    timer.textContent = timeLeft;

    generateRandomLetter();

    gameTimer = setInterval(function(){

        timeLeft--;

        timer.textContent = timeLeft;

        if(timeLeft <= 0){
            stopGameFunction();
        }

    },1000);
}


// Fonction arrêt
function stopGameFunction(){

    gameActive = false;

    clearInterval(gameTimer);

    alert(`Partie terminée ! Score final : ${gameScore}`);
}


// Event clavier
document.addEventListener('keydown', function(event){

    if(!gameActive){
        return;
    }

    const key = event.key;
    const code = event.code;
    const keycode = event.keyCode;

    console.log(key);
    console.log(code);
    console.log(keycode);

    currentKey.textContent = key;
    currentCode.textContent = code;
    currentKeycode.textContent = keycode;

    // Vérification lettre
    if(event.key.toUpperCase() === currentLetter){

        gameScore++;

        score.textContent = gameScore;

        resultStatus.textContent = '✅ Correct !';
        resultStatus.className = 'correct';

        targetLetter.classList.add('correct');

        generateRandomLetter();

    } else {

        resultStatus.textContent = '❌ Raté !';
        resultStatus.className = 'wrong';

        targetLetter.classList.add('wrong');
    }

    // Retire animations
    setTimeout(function(){

        targetLetter.classList.remove('correct');
        targetLetter.classList.remove('wrong');

    },300);

});


// Bouton démarrer
startGame.addEventListener('click', function(){

    startGameFunction();

});


// Initialisation
generateRandomLetter();

