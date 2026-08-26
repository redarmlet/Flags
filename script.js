const countries = [
    { name: "afghanistan", code: "af", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "albania", code: "al", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "algeria", code: "dz", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "andorra", code: "ad", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "angola", code: "ao", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "antigua and barbuda", code: "ag", difficulty: 3, continent: "America", classic: "no" },
    { name: "argentina", code: "ar", difficulty: 1, continent: "America", classic: "yes" },
    { name: "armenia", code: "am", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "australia", code: "au", difficulty: 1, continent: "Oceania", classic: "yes" },
    { name: "austria", code: "at", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "azerbaijan", code: "az", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bahamas", code: "bs", difficulty: 3, continent: "America", classic: "yes" },
    { name: "bahrain", code: "bh", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bangladesh", code: "bd", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "barbados", code: "bb", difficulty: 3, continent: "America", classic: "no" },
    { name: "belarus", code: "by", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "belgium", code: "be", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "belize", code: "bz", difficulty: 3, continent: "America", classic: "yes" },
    { name: "benin", code: "bj", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "bhutan", code: "bt", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bolivia", code: "bo", difficulty: 3, continent: "America", classic: "yes" },
    { name: "bosnia and herzegovina", code: "ba", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "botswana", code: "bw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "brazil", code: "br", difficulty: 1, continent: "America", classic: "yes" },
    { name: "brunei", code: "bn", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bulgaria", code: "bg", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "burkina faso", code: "bf", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "burundi", code: "bi", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "cabo verde", code: "cv", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "cambodia", code: "kh", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "cameroon", code: "cm", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "canada", code: "ca", difficulty: 1, continent: "America", classic: "yes" },
    { name: "central african republic", code: "cf", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "chad", code: "td", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "chile", code: "cl", difficulty: 2, continent: "America", classic: "yes" },
    { name: "china", code: "cn", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "colombia", code: "co", difficulty: 2, continent: "America", classic: "yes" },
    { name: "comoros", code: "km", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "congo", code: "cg", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "costa rica", code: "cr", difficulty: 2, continent: "America", classic: "yes" },
    { name: "croatia", code: "hr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "cuba", code: "cu", difficulty: 2, continent: "America", classic: "yes" },
    { name: "cyprus", code: "cy", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "czechia", code: "cz", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "democratic republic of the congo", code: "cd", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "denmark", code: "dk", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "djibouti", code: "dj", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "dominica", code: "dm", difficulty: 3, continent: "America", classic: "no" },
    { name: "dominican republic", code: "do", difficulty: 2, continent: "America", classic: "yes" },
    { name: "ecuador", code: "ec", difficulty: 2, continent: "America", classic: "yes" },
    { name: "egypt", code: "eg", difficulty: 1, continent: "Africa", classic: "yes" },
    { name: "el salvador", code: "sv", difficulty: 3, continent: "America", classic: "yes" },
    { name: "equatorial guinea", code: "gq", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "eritrea", code: "er", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "estonia", code: "ee", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "eswatini", code: "sz", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "ethiopia", code: "et", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "fiji", code: "fj", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "finland", code: "fi", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "france", code: "fr", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "gabon", code: "ga", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "gambia", code: "gm", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "georgia", code: "ge", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "germany", code: "de", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "ghana", code: "gh", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "greece", code: "gr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "grenada", code: "gd", difficulty: 3, continent: "America", classic: "no" },
    { name: "guatemala", code: "gt", difficulty: 3, continent: "America", classic: "yes" },
    { name: "guinea", code: "gn", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "guinea-bissau", code: "gw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "guyana", code: "gy", difficulty: 3, continent: "America", classic: "yes" },
    { name: "haiti", code: "ht", difficulty: 3, continent: "America", classic: "yes" },
    { name: "honduras", code: "hn", difficulty: 3, continent: "America", classic: "yes" },
    { name: "hungary", code: "hu", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "iceland", code: "is", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "india", code: "in", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "indonesia", code: "id", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "iran", code: "ir", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "iraq", code: "iq", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "ireland", code: "ie", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "israel", code: "il", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "italy", code: "it", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "ivory coast", code: "ci", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "jamaica", code: "jm", difficulty: 2, continent: "America", classic: "yes" },
    { name: "japan", code: "jp", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "jordan", code: "jo", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "kazakhstan", code: "kz", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "kenya", code: "ke", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "kiribati", code: "ki", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "kuwait", code: "kw", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "kyrgyzstan", code: "kg", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "laos", code: "la", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "latvia", code: "lv", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "lebanon", code: "lb", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "lesotho", code: "ls", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "liberia", code: "lr", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "libya", code: "ly", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "liechtenstein", code: "li", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "lithuania", code: "lt", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "luxembourg", code: "lu", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "madagascar", code: "mg", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "malawi", code: "mw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "malaysia", code: "my", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "maldives", code: "mv", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "mali", code: "ml", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "malta", code: "mt", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "marshall islands", code: "mh", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "mauritania", code: "mr", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "mauritius", code: "mu", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "mexico", code: "mx", difficulty: 1, continent: "America", classic: "yes" },
    { name: "micronesia", code: "fm", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "moldova", code: "md", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "monaco", code: "mc", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "mongolia", code: "mn", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "montenegro", code: "me", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "morocco", code: "ma", difficulty: 2, continent: "Africa", classic: "yes" },
    { name: "mozambique", code: "mz", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "myanmar", code: "mm", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "namibia", code: "na", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "nauru", code: "nr", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "nepal", code: "np", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "netherlands", code: "nl", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "new zealand", code: "nz", difficulty: 1, continent: "Oceania", classic: "no" },
    { name: "nicaragua", code: "ni", difficulty: 3, continent: "America", classic: "yes" },
    { name: "niger", code: "ne", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "nigeria", code: "ng", difficulty: 1, continent: "Africa", classic: "no" },
    { name: "north korea", code: "kp", difficulty: 2, continent: "Asia", classic: "yes" },
    { name: "north macedonia", code: "mk", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "norway", code: "no", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "oman", code: "om", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "pakistan", code: "pk", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "palau", code: "pw", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "palestine", code: "ps", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "panama", code: "pa", difficulty: 3, continent: "America", classic: "yes" },
    { name: "papua new guinea", code: "pg", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "paraguay", code: "py", difficulty: 3, continent: "America", classic: "yes" },
    { name: "peru", code: "pe", difficulty: 2, continent: "America", classic: "yes" },
    { name: "philippines", code: "ph", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "poland", code: "pl", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "portugal", code: "pt", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "qatar", code: "qa", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "romania", code: "ro", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "russia", code: "ru", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "rwanda", code: "rw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "saint kitts and nevis", code: "kn", difficulty: 3, continent: "America", classic: "no" },
    { name: "saint lucia", code: "lc", difficulty: 3, continent: "America", classic: "no" },
    { name: "saint vincent and the grenadines", code: "vc", difficulty: 3, continent: "America", classic: "no" },
    { name: "samoa", code: "ws", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "san marino", code: "sm", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "sao tome and principe", code: "st", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "saudi arabia", code: "sa", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "senegal", code: "sn", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "serbia", code: "rs", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "seychelles", code: "sc", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "sierra leone", code: "sl", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "singapore", code: "sg", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "slovakia", code: "sk", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "slovenia", code: "si", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "solomon islands", code: "sb", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "somalia", code: "so", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "south africa", code: "za", difficulty: 1, continent: "Africa", classic: "yes" },
    { name: "south korea", code: "kr", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "south sudan", code: "ss", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "spain", code: "es", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "sri lanka", code: "lk", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "sudan", code: "sd", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "suriname", code: "sr", difficulty: 3, continent: "America", classic: "yes" },
    { name: "sweden", code: "se", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "switzerland", code: "ch", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "syria", code: "sy", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "taiwan", code: "tw", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "tajikistan", code: "tj", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "tanzania", code: "tz", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "thailand", code: "th", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "timor-leste", code: "tl", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "togo", code: "tg", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "tonga", code: "to", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "trinidad and tobago", code: "tt", difficulty: 3, continent: "America", classic: "yes" },
    { name: "tunisia", code: "tn", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "turkey", code: "tr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "turkmenistan", code: "tm", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "tuvalu", code: "tv", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "uganda", code: "ug", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "ukraine", code: "ua", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "united arab emirates", code: "ae", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "united kingdom", code: "gb", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "united states", code: "us", difficulty: 1, continent: "America", classic: "yes" },
    { name: "uruguay", code: "uy", difficulty: 2, continent: "America", classic: "yes" },
    { name: "uzbekistan", code: "uz", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "vanuatu", code: "vu", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "vatican city", code: "va", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "venezuela", code: "ve", difficulty: 2, continent: "America", classic: "yes" },
    { name: "vietnam", code: "vn", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "yemen", code: "ye", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "zambia", code: "zm", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "zimbabwe", code: "zw", difficulty: 3, continent: "Africa", classic: "no" }
];



let score = 0;
let lives = 3;
let time = 180;
let intervalo = null;
let banderasCorrectas = 0;
let actualPage = 1;

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
const book = document.getElementById('m-book');
const bookPage = document.getElementById('book-pg');

const menu = document.getElementById('menu');
const mTitle = document.getElementById('m-title');
const mScore = document.getElementById('m-score');
const mTime = document.getElementById('m-time');
const mBonus = document.getElementById('m-bonus');
const mFinal = document.getElementById('m-final');
const mFlags = document.getElementById('m-flags');
const mLoading = document.getElementById('menu-loading')
const btnSkip = document.getElementById('btn-skip');
const btnHelp = document.getElementById('btn-info');
const btnBack = document.getElementById('btn-back');
const btnBackHtp = document.getElementById('btn-htp-back');
const btnHtp = document.getElementById('btn-htp');
const btnSound = document.getElementById('btn-sound');
const btnBackSound = document.getElementById('btn-audio-back');
const btnControls = document.getElementById('btn-controls');
const btnBackControls = document.getElementById('btn-controls-back');
const btnBackBook = document.getElementById('book-back-btn');
const btnNextBook = document.getElementById('book-next-btn');
const btnAF = document.getElementById('book-af-btn');
const btnAM = document.getElementById('book-am-btn');
const btnAS = document.getElementById('book-as-btn');
const btnEU = document.getElementById('book-eu-btn');
const btnOC = document.getElementById('book-oc-btn');
const btnCloseBook = document.getElementById('book-close-btn');

const music = document.getElementById('audio');
const AudioC = document.getElementById('correct');
const AudioI = document.getElementById('incorrect');
const AudioBook = document.getElementById('a-book');
const AudioStart = document.getElementById('a-start');
const AudioInfo = document.getElementById('a-info');
const AudioMaster = document.getElementById('a-master');
const AudioHighScore = document.getElementById('a-highscore');
const AudioGameover = document.getElementById('a-gameover');

const cbClassic = document.getElementById('cb-classic');
const cbContinents = document.querySelectorAll('#menu-1 .checkboxes input[type="checkbox"]')
const cbSfx = document.getElementById('cb-sfx');
const cbMusic = document.getElementById('cb-music');

const sfxRange = document.getElementById('sfxRange');
const musicRange = document.getElementById('musicRange');
const range = parseInt(musicRange.value, 10);
const rangeSfx = parseInt(sfxRange.value, 10);

displayHighScore.textContent = String(highScore).padStart(6, '0');

btnPlay.addEventListener('click', startGame);
btnBook.addEventListener('click', toggleBook);
btnSkip.addEventListener('click', skip);
btnHelp.addEventListener('click', () => { closeAll(); toggleInfo(); });
btnBack.addEventListener('click', closeInfo);
btnBackHtp.addEventListener('click', closeHtp);
btnHtp.addEventListener('click', openHtp);
btnSound.addEventListener('click', openSound);
btnBackSound.addEventListener('click', closeSound);
btnControls.addEventListener('click', openControls);
btnBackControls.addEventListener('click', closeControls);
btnBackBook.addEventListener('click', prevPage);
btnNextBook.addEventListener('click', nextPage);
btnAF.addEventListener('click', () => { actualPage = 1; changePage(); });
btnAM.addEventListener('click', () => { actualPage = 3; changePage(); });
btnAS.addEventListener('click', () => { actualPage = 5; changePage(); });
btnEU.addEventListener('click', () => { actualPage = 7; changePage(); });
btnOC.addEventListener('click', () => { actualPage = 9; changePage(); });
btnCloseBook.addEventListener('click', closeBook);

music.defaultVolume = 0.8; 
AudioC.defaultVolume = 0.2;
AudioI.defaultVolume = 0.12; 
AudioBook.defaultVolume = 0.2;
AudioStart.defaultVolume = 0.4;
AudioInfo.defaultVolume = 1;
AudioMaster.defaultVolume = 0.4;
AudioHighScore.defaultVolume = 0.4;
AudioGameover.defaultVolume = 0.4;

music.volume = music.defaultVolume * (range / 10);
AudioC.volume = AudioC.defaultVolume * (rangeSfx / 10);
AudioI.volume = AudioI.defaultVolume * (rangeSfx / 10);
AudioBook.volume = AudioBook.defaultVolume * (rangeSfx / 10);
AudioStart.volume = AudioStart.defaultVolume * (rangeSfx / 10);
AudioInfo.volume = AudioInfo.defaultVolume * (rangeSfx / 10);
AudioMaster.volume = AudioMaster.defaultVolume * (rangeSfx / 10);
AudioHighScore.volume = AudioHighScore.defaultVolume * (rangeSfx / 10);
AudioGameover.volume = AudioGameover.defaultVolume * (rangeSfx / 10);

unmuteAudio();
unmuteMusic();

const imagePaths = [
  'images/Background.webp', 'images/Badlands.webp', 'images/book.png',
  'images/book-off.webp', 'images/book-on.webp', 'images/book-p1.png',
  'images/book-p2.png', 'images/book-p3.png', 'images/book-p4.png',
  'images/book-p5.png', 'images/book-p6.png', 'images/book-p7.png',
  'images/book-p8.png', 'images/book-p9.png', 'images/border.webp',
  'images/border-0.webp', 'images/border-1.webp', 'images/coin.gif',
  'images/coin.webp', 'images/coin-gif.gif', 'images/flag.gif',
  'images/gem.webp', 'images/gem-on.webp', 'images/help.webp',
  'images/info.png', 'images/logo.webp', 'images/ornament.webp',
  'images/paper.png', 'images/UI-00.webp'
];

function preloadImages() {
  if (imagePaths.length === 0) return;

  openLoading();

  const promises = imagePaths.map(path => new Promise(resolve => {
    const img = new Image();
    
    img.onload = resolve;
    img.onerror = resolve; 
    
    img.src = path;
  }));
  Promise.all(promises).then(() => {
    closeLoading();
    
  });
}

document.addEventListener('DOMContentLoaded', preloadImages);

function changePage(){
    if (actualPage === 1){
        bookPage.src = 'images/book-p1.png';
        btnBackBook.style.opacity = 0;
        btnBackBook.style.pointerEvents = 'none';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 2){
        bookPage.src = 'images/book-p2.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 3){
        bookPage.src = 'images/book-p3.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 4){
        bookPage.src = 'images/book-p4.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 5){
        bookPage.src = 'images/book-p5.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 6){
        bookPage.src = 'images/book-p6.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 7){
        bookPage.src = 'images/book-p7.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 8){
        bookPage.src = 'images/book-p8.png';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
        btnNextBook.style.opacity = 1;
        btnNextBook.style.pointerEvents = 'inherit';
    }
    else if (actualPage === 9){
        bookPage.src = 'images/book-p9.png';
        btnNextBook.style.opacity = 0;
        btnNextBook.style.pointerEvents = 'none';
        btnBackBook.style.opacity = 1;
        btnBackBook.style.pointerEvents = 'inherit';
    }
}
function nextPage(){
    if (actualPage < 9){
        actualPage ++;
        changePage();
    }
}
function prevPage(){
    if (actualPage > 1){
        actualPage --;
        changePage();
    }
}

function openLoading(){
    mLoading.style.opacity= '1';
    mLoading.style.pointerEvents= 'auto';
}
function closeLoading(){
    mLoading.style.opacity= '0';
    mLoading.style.pointerEvents= 'none';
}
function toggleLoading(){
    if(mLoading.style.opacity === '1'){
        closeLoading();
    }else{
        openLoading();
    }
}
musicRange.addEventListener('input', function(){
    const range = parseInt(musicRange.value, 10);
    music.volume = music.defaultVolume * (range / 10);
});
sfxRange.addEventListener('input', function(){

    const rangeSfx = parseInt(sfxRange.value, 10);
    AudioC.volume = AudioC.defaultVolume * (rangeSfx / 10);
    AudioI.volume = AudioI.defaultVolume * (rangeSfx / 10);
    AudioBook.volume = AudioBook.defaultVolume * (rangeSfx / 10);
    AudioStart.volume = AudioStart.defaultVolume * (rangeSfx / 10);
    AudioInfo.volume = AudioInfo.defaultVolume * (rangeSfx / 10);
    AudioMaster.volume = AudioMaster.defaultVolume * (rangeSfx / 10);
    AudioHighScore.volume = AudioHighScore.defaultVolume * (rangeSfx / 10);
    AudioGameover.volume = AudioGameover.defaultVolume * (rangeSfx / 10);
});

cbClassic.addEventListener('change', function(){
    if (this.checked) {
        cbContinents.forEach(cb => cb.checked = false);
    }
    else {
        const checkedContinents = document.querySelectorAll('#menu-1 .checkboxes input[type="checkbox"]:checked');
        if (checkedContinents.length === 0) {
            this.checked = true;
        }
    }
});

cbContinents.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            cbClassic.checked = false;
        }
        else {
            const checkedContinents = document.querySelectorAll('#menu-1 .checkboxes input[type="checkbox"]:checked');
            if (checkedContinents.length === 0 && !cbClassic.checked ) {
                this.checked = true;
            }
        }
    });
});

cbSfx.addEventListener('change',function(){
    if (this.checked){
        unmuteAudio();
    }
    else{
        muteAudio();
    }
});

cbMusic.addEventListener('change',function(){
    if (this.checked){
        unmuteMusic();
    }
    else{
        muteMusic();
    }
});



function openHtp(){
    let menu = document.getElementById('m-main');
    let htp =document.getElementById('m-htp');

    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
    htp.style.opacity = "1";
    htp.style.pointerEvents = "auto";
}
function closeHtp(){
    let menu = document.getElementById('m-main');
    let htp =document.getElementById('m-htp');

    menu.style.opacity = "1";
    menu.style.pointerEvents = "inherit";
    htp.style.opacity = "0";
    htp.style.pointerEvents = "none";
}

function openControls(){
    let menu = document.getElementById('m-main');
    let ctrl =document.getElementById('m-controls');

    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
    ctrl.style.opacity = "1";
    ctrl.style.pointerEvents = "auto";
}
function closeControls(){
    let menu = document.getElementById('m-main');
    let ctrl =document.getElementById('m-controls');

    menu.style.opacity = "1";
    menu.style.pointerEvents = "inherit";
    ctrl.style.opacity = "0";
    ctrl.style.pointerEvents = "none";
}

function openSound(){
    let menu = document.getElementById('m-main');
    let sound =document.getElementById('m-sound');

    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
    sound.style.opacity = "1";
    sound.style.pointerEvents = "auto";
}
function closeSound(){
    let menu = document.getElementById('m-main');
    let sound =document.getElementById('m-sound');

    menu.style.opacity = "1";
    menu.style.pointerEvents = "inherit";
    sound.style.opacity = "0";
    sound.style.pointerEvents = "none";
}

function toggleBook() {
    let libro = document.getElementById('m-book');
    
    if (libro.style.opacity === "1") {
        closeBook();
    } else {
        openBook();
    }
}
function openBook(){
    AudioBook.play();
    let libro = document.getElementById('m-book');
    libro.style.opacity = "1";
    libro.style.pointerEvents = 'auto';

}
function closeBook(){
    let libro = document.getElementById('m-book');
    libro.style.opacity = "0";
    libro.style.pointerEvents = 'none';

}

function toggleInfo() {
    
    let info = document.getElementById('menu-1');

    if (info.style.opacity === "0") {
        openInfo();
    } else {
        closeInfo();
    }

}
function openInfo(){
    
    AudioInfo.play();
    let info = document.getElementById('menu-1');
    info.style.opacity = "1";
    info.style.pointerEvents = "auto";
}
function closeInfo(){
    
    let info = document.getElementById('menu-1');
    info.style.opacity = "0";
    info.style.pointerEvents = "none";
    
}
function closeAll(){
    closeControls();
    closeHtp();
    closeSound();
}
window.addEventListener("keydown", function(event){

    if (event.key === "Escape") {
        let libro = document.getElementById('m-book');
        let info = document.getElementById('menu-1');
        let go = document.getElementById('menu');

        if (libro.style.opacity === "1" && info.style.opacity === "1") {
            closeAll();
            toggleInfo();
        }
        else if (libro.style.opacity === "0" && info.style.opacity === "0"){
            closeAll();
            toggleInfo();
        }
        else {
            skip();
            closeBook();
            closeInfo();
        }
    }
    if (event.key === "1") {
        this.toggleBook();
    }
    if (event.key === "2") {
        closeAll();
        this.toggleInfo();
    }
    if (event.key === "0") {
        if (music.muted){
            unmuteMusic();
        }else{
            muteMusic();
        }
    }
    if (event.key === "9") {
        if (AudioC.muted){
            unmuteAudio();
        }else{
            muteAudio();
        }
    }
    if (event.key === "8") {
        startGame();
    }
    
});

function muteAudio(){
    AudioC.muted = true;
    AudioI.muted = true;
    AudioBook.muted = true;
    AudioStart.muted = true;
    AudioInfo.muted = true;
    cbSfx.checked = false;
}
function unmuteAudio(){
    AudioC.muted = false;
    AudioI.muted = false;
    AudioBook.muted = false;
    AudioStart.muted = false;
    AudioInfo.muted = false;
    cbSfx.checked = true;
}
function muteMusic(){
    music.muted = true;
    cbMusic.checked = false;
}
function unmuteMusic(){
    music.muted = false;
    cbMusic.checked = true;
}
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

function getGameCountries() {
    if (cbClassic.checked){
        return countries.filter(country => country.classic === 'yes');
    }
    const selectedContinents = [];

    cbContinents.forEach(cb => {
        if (cb.checked) {
            selectedContinents.push(cb.name);
        }
    });

    return countries.filter(country => selectedContinents.includes(country.continent));
}

function startGame() {
    
    banderasCorrectas = 0;
    closeBook();
    closeInfo();
    skip();
    music.play();
    AudioStart.play();

    flagImg.src ="images/flag.gif";

    score = 0;
    lives = 3;
    displayScore.textContent = String(score).padStart(6, '0');
    displayLives.textContent = lives;
    
    availableCountries = getGameCountries();
    time = Math.round(availableCountries.length * 3);

    btnPlay.disabled = true;
    inputCountry.disabled = false;
    setTimeout(() => {
        
        startTime();
        nextFlag();
        displayRemaining.textContent = String((availableCountries.length)+1)

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

    const minDifficulty = Math.min(...availableCountries.map(pais => pais.difficulty));

    const countriesOfCurrentDifficulty = availableCountries.filter(pais => pais.difficulty === minDifficulty);
    const randomIndex = Math.floor(Math.random() * countriesOfCurrentDifficulty.length);
    currentCountry = countriesOfCurrentDifficulty[randomIndex];
    const mainIndex = availableCountries.indexOf(currentCountry);
    availableCountries.splice(mainIndex, 1);
    
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

        banderasCorrectas++;
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
            inputCountry.disabled = true;
            inputCountry.placeholder = correctAnswer;
            setTimeout(() => {
                inputCountry.disabled = false;
                if (lives > 0) {
                    nextFlag();
                } else {
                    gameOver();
                }
            }, 500);


        }
        border.src ="images/border-1.webp";
        setTimeout(() => {
            border.src ="images/border.webp";;
        }, 300);
    }
    displayRemaining.textContent = String((availableCountries.length)+1)
}

function gameOver() {

    paises = getGameCountries();
    totalCountries = paises.length;

    music.pause();
    if (availableCountries.length === 0 && lives === 3 ) {
        mTitle.textContent = 'HAIL MASTER OF FLAGS!';
        AudioMaster.play();
    } else if (availableCountries.length === 0 && lives < 0 ){
        if (score > highScore) {
            mTitle.textContent = 'IMPRESSIVE NEW HIGHSCORE';
            AudioHighScore.play();
        } else {
            mTitle.textContent = '${3 - lives} LIVES AWAY FROM GLORY';
            AudioGameover.play();
        }
    }else {
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

    const paisesAdivinados = banderasCorrectas;
    const bonoAdivinados = banderasCorrectas * 50;
    const bonoVidas = lives * 1000;
    let bonoTiempo = 0;
        if (lives == 0){ bonoTiempo = 0;}
        else if (lives == 1){bonoTiempo = time * 2;}
        else if (lives == 2){ bonoTiempo = time * 3;}
        else{ bonoTiempo = time * 4;}

    const bonus = (bonoAdivinados+bonoVidas+bonoTiempo);

   
    const gameTime = Math.round(totalCountries*3);

    mScore.textContent = String(score).padStart(17,'.');
    mTime.textContent = String((gameTime-time)+'s').padStart(18,'.');
    mBonus.textContent = String(bonus).padStart(17,'.');
    mFlags.textContent = String(paisesAdivinados).padStart(9,'.');
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
