const countries = [
    { name: "albania", code: "al", difficulty: 3 },
    { name: "argentina", code: "ar", difficulty: 1 },
    { name: "australia", code: "au", difficulty: 1 },
    { name: "austria", code: "at", difficulty: 2 },
    { name: "bahamas", code: "bs", difficulty: 3 },
    { name: "belarus", code: "by", difficulty: 3 },
    { name: "belgium", code: "be", difficulty: 2 },
    { name: "belize", code: "bz", difficulty: 3 },
    { name: "bolivia", code: "bo", difficulty: 3 },
    { name: "bosnia and herzegovina", code: "ba", difficulty: 3 },
    { name: "brazil", code: "br", difficulty: 1 },
    { name: "bulgaria", code: "bg", difficulty: 3 },
    { name: "canada", code: "ca", difficulty: 1 },
    { name: "chile", code: "cl", difficulty: 2 },
    { name: "china", code: "cn", difficulty: 1 },
    { name: "colombia", code: "co", difficulty: 2 },
    { name: "costa rica", code: "cr", difficulty: 2 },
    { name: "croatia", code: "hr", difficulty: 2 },
    { name: "cuba", code: "cu", difficulty: 2 },
    { name: "cyprus", code: "cy", difficulty: 3 },
    { name: "czechia", code: "cz", difficulty: 2 },
    { name: "denmark", code: "dk", difficulty: 2 },
    { name: "dominican republic", code: "do", difficulty: 2 },
    { name: "ecuador", code: "ec", difficulty: 2 },
    { name: "egypt", code: "eg", difficulty: 1 },
    { name: "el salvador", code: "sv", difficulty: 3 },
    { name: "estonia", code: "ee", difficulty: 3 },
    { name: "finland", code: "fi", difficulty: 2 },
    { name: "france", code: "fr", difficulty: 1 },
    { name: "germany", code: "de", difficulty: 1 },
    { name: "greece", code: "gr", difficulty: 2 },
    { name: "guatemala", code: "gt", difficulty: 3 },
    { name: "guyana", code: "gy", difficulty: 3 },
    { name: "haiti", code: "ht", difficulty: 3 },
    { name: "honduras", code: "hn", difficulty: 3 },
    { name: "hungary", code: "hu", difficulty: 2 },
    { name: "iceland", code: "is", difficulty: 3 },
    { name: "india", code: "in", difficulty: 1 },
    { name: "ireland", code: "ie", difficulty: 2 },
    { name: "italy", code: "it", difficulty: 1 },
    { name: "jamaica", code: "jm", difficulty: 2 },
    { name: "latvia", code: "lv", difficulty: 3 },
    { name: "lithuania", code: "lt", difficulty: 3 },
    { name: "luxembourg", code: "lu", difficulty: 3 },
    { name: "mexico", code: "mx", difficulty: 1 },
    { name: "moldova", code: "md", difficulty: 3 },
    { name: "montenegro", code: "me", difficulty: 3 },
    { name: "morocco", code: "ma", difficulty: 2 },
    { name: "netherlands", code: "nl", difficulty: 2 },
    { name: "nicaragua", code: "ni", difficulty: 3 },
    { name: "north korea", code: "kp", difficulty: 2 },
    { name: "north macedonia", code: "mk", difficulty: 3 },
    { name: "norway", code: "no", difficulty: 2 },
    { name: "panama", code: "pa", difficulty: 3 },
    { name: "paraguay", code: "py", difficulty: 3 },
    { name: "peru", code: "pe", difficulty: 2 },
    { name: "poland", code: "pl", difficulty: 2 },
    { name: "portugal", code: "pt", difficulty: 2 },
    { name: "romania", code: "ro", difficulty: 3 },
    { name: "russia", code: "ru", difficulty: 1 },
    { name: "serbia", code: "rs", difficulty: 3 },
    { name: "slovakia", code: "sk", difficulty: 3 },
    { name: "slovenia", code: "si", difficulty: 3 },
    { name: "south africa", code: "za", difficulty: 1 },
    { name: "south korea", code: "kr", difficulty: 1 },
    { name: "spain", code: "es", difficulty: 1 },
    { name: "suriname", code: "sr", difficulty: 3 },
    { name: "sweden", code: "se", difficulty: 2 },
    { name: "switzerland", code: "ch", difficulty: 2 },
    { name: "trinidad and tobago", code: "tt", difficulty: 3 },
    { name: "turkey", code: "tr", difficulty: 2 },
    { name: "ukraine", code: "ua", difficulty: 2 },
    { name: "united kingdom", code: "gb", difficulty: 1 },
    { name: "united states", code: "us", difficulty: 1 },
    { name: "uruguay", code: "uy", difficulty: 2 },
    { name: "venezuela", code: "ve", difficulty: 2 }
];



let score = 0;
let lives = 3;
let time = 180;
let intervalo = null;

let highScore = localStorage.getItem('flagsHighScore') || 0;
let currentCountry = null;
let availableCountries = [];

const btnPlay = document.getElementById('btn-play');
const flagImg = document.getElementById('flag-display');
const inputCountry = document.getElementById('country-input');
const displayScore = document.getElementById('score');
const displayLives = document.getElementById('lives');
const displayHighScore = document.getElementById('high-score');
const displayTime = document.getElementById('time');
const displayRemaining = document.getElementById('remaining');

const border = document.getElementById('border');
const btnBook = document.getElementById('btn-book');
const book = document.getElementById('book');

const menu = document.getElementById('menu');
const mTitle = document.getElementById('m-title');
const mScore = document.getElementById('m-score');
const mTime = document.getElementById('m-time');
const mBonus = document.getElementById('m-bonus');
const mFinal = document.getElementById('m-final');
const btnSkip = document.getElementById('btn-skip');
const btnHelp = document.getElementById('help');

const music = document.getElementById('audio');
const AudioC = document.getElementById('correct');
const AudioI = document.getElementById('incorrect');
const AudioBook = document.getElementById('a-book');
const AudioStart = document.getElementById('a-start');
const AudioInfo = document.getElementById('a-info');
const AudioMaster = document.getElementById('a-master');
const AudioHighScore = document.getElementById('a-highscore');
const AudioGameover = document.getElementById('a-gameover');

displayHighScore.textContent = String(highScore).padStart(6, '0');

btnPlay.addEventListener('click', startGame);
btnBook.addEventListener('click', openBook);
btnSkip.addEventListener('click', skip);
btnHelp.addEventListener('click', openInfo);

AudioC.volume = 0.05; 
AudioI.volume = 0.05; 
AudioBook.volume = 0.05;
AudioStart.volume = 0.1;
AudioInfo.volume = 0.5;
AudioMaster.volume = 0.1;
AudioHighScore.volume = 0.1;
AudioGameover.volume = 0.1;

function openBook() {
    let libro = document.getElementById('book');
    
    if (libro.style.opacity === "1") {
        closeBook();
    } else {
        oBook();
    }
}
function oBook(){
    AudioBook.play();
    let libro = document.getElementById('book');
    libro.style.opacity = "1";
    border.style.opacity ="0";
}
function closeBook(){
    let libro = document.getElementById('book');
    libro.style.opacity = "0";
    border.style.opacity ="1";

}

function openInfo() {
    
    let info = document.getElementById('info');

    if (info.style.opacity === "0") {
        oInfo();
    } else {
        closeInfo();
    }

}
function oInfo(){
    
    AudioInfo.play();
    let info = document.getElementById('info');
    info.style.opacity = "1";
}
function closeInfo(){
    
    let info = document.getElementById('info');
    info.style.opacity = "0";
}

window.addEventListener("keydown", function(event){

    if (event.key === "Escape") {
        let libro = document.getElementById('book');
        let info = document.getElementById('info');
        if (libro.style.opacity === "1" && info.style.opacity === "1") {
            openInfo();
        }else {
            skip();
            closeBook();
            closeInfo();
        }
    }if (event.key === "1") {
        this.openBook();
    }if (event.key === "2") {
        this.openInfo();
    }if (event.key === "0") {
        if (music.volume == 0){
            music.volume = 0.2;
        }else{
            music.volume = 0;
        }
    }if (event.key === "9") {
        if (AudioC.volume == 0){
            AudioC.volume = 0.05;
            AudioI.volume = 0.05;
            AudioBook.volume = 0.05;
            AudioStart.volume = 0.1;
            AudioInfo.volume = 0.5;
        }else{
            AudioC.volume = 0;
            AudioI.volume = 0;
            AudioBook.volume = 0;
            AudioStart.volume = 0;
            AudioInfo.volume = 0;
        }
    }if (event.key === "8") {
        startGame();
    }
    
});


function startTime() {
    
    if (!intervalo){
        intervalo = setInterval(() =>{
            time--;
            console.log(time);
            displayTime.textContent = String(time).padStart(6, '0');
            if (time <0){
                gameOver()
            }
        }, 1000);
    }

}
function stopTime() {

    clearInterval(intervalo);
    intervalo = null;

}

function skip() {

    menu.style.opacity = 0;
    menu.style.pointerEvents = 'none';

}

function startGame() {
    
    closeBook();
    closeInfo();
    skip();

    music.volume = 0.2; 
    music.play();
    AudioStart.play();

    flagImg.src ="images/flag.gif";

    time = 180;
    score = 0;
    lives = 3;
    displayScore.textContent = String(score).padStart(6, '0');
    displayLives.textContent = lives;
    
    availableCountries = [...countries];

    btnPlay.disabled = true;
    inputCountry.disabled = false;
    setTimeout(() => {
        
        
        startTime();
        nextFlag();
        displayRemaining.textContent = String(availableCountries.length)


    }, 2400);
    
}

function nextFlag() {
    currentFlagErrors = 0;

    inputCountry.value = '';
    inputCountry.focus();
    inputCountry.placeholder = 'ENTER COUNTRY';

    if (availableCountries.length === 0) {
        gameOver();
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    currentCountry = availableCountries[randomIndex];
    
    availableCountries.splice(randomIndex, 1);
    
    flagImg.src = `images/flags/${currentCountry.code}.webp`;
}

let currentFlagErrors = 0;

inputCountry.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputCountry.value != "") {
        checkAnswer();
    }if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
    }
});

function cleanText(text) {
    return text.toLowerCase().trim();
}


function checkAnswer() {
    const userAnswer = cleanText(inputCountry.value);
    const correctAnswer = cleanText(currentCountry.name);

    
    if (userAnswer === correctAnswer) {

        
        AudioC.play();

        if (currentCountry.difficulty === 1) {
            score += 100;
        } else if (currentCountry.difficulty === 2) {
            score += 150;
        } else if (currentCountry.difficulty === 3) {
            score += 250;
        }

        displayScore.textContent = String(score).padStart(6, '0');
        nextFlag();

        border.src ="images/border-0.webp";
        setTimeout(() => {
            border.src ="images/border.webp";
        }, 300);

    } else {
        
        AudioI.play();
        
        currentFlagErrors++;
        inputCountry.value = ''; 

        if (currentFlagErrors === 1) {
            inputCountry.placeholder = 'TRY AGAIN';
            score -= 100;
            if (score < 0){
                score = 0;
            }
            displayScore.textContent = String(score).padStart(6, '0');
        }

        if (currentFlagErrors >= 2) {
            lives--;
            displayLives.textContent = lives;
            score -= 100;
            if (score < 0){
                score = 0;
            }
            displayScore.textContent = String(score).padStart(6, '0');
            if (lives > 0) {
                nextFlag();
            } else {
                gameOver();
            }
        }
        border.src ="images/border-1.webp";
        setTimeout(() => {
            border.src ="images/border.webp";;
        }, 300);
    }
    displayRemaining.textContent = String(availableCountries.length)
}

function gameOver() {

    music.pause();
    if (availableCountries.length === 0 && lives > 0) {
    mTitle.textContent = 'HAIL MASTER OF FLAGS';
    AudioMaster.play();
    } else {
        if (score > highScore) {
            mTitle.textContent = 'NEW HIGHSCORE';
            AudioHighScore.play();
        } else {
            mTitle.textContent = 'GAME OVER';
            AudioGameover.play();
        }
    }



    menu.style.opacity = 1;
    menu.style.pointerEvents = 'auto';

    inputCountry.disabled = true;
    inputCountry.value = '';
    inputCountry.placeholder = 'ENTER COUNTRY';

    flagImg.src = 'images/flags/xx.webp'; 
    btnPlay.disabled = false; 
    stopTime();

    const paisesAdivinados = countries.length - availableCountries.length;
    const bonoSupervivencia = paisesAdivinados * 50;
    const bonoVidas = lives * 1000;
    let bonoTiempo;
        if (lives == 0){ bonoTiempo = 0;}
        else if (lives == 1){bonoTiempo = time * 2;}
        else if (lives == 2){ bonoTiempo = time * 3;}
        else{ bonoTiempo = time * 4;}

    const bonus = (bonoSupervivencia+bonoVidas+bonoTiempo);

    mScore.textContent = String(score).padStart(17,'.');
    mTime.textContent = String((180-time)+'s').padStart(18,'.');
    mBonus.textContent = String(bonus).padStart(17,'.');
    score += bonus;
    mFinal.textContent = String(score).padStart(11,'.');

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('flagsHighScore', highScore);
        displayHighScore.textContent = highScore;
    }
    
    time = 0;
    displayTime.textContent = String(time).padStart(6, '0');
}
