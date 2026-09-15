const countries = [
    { name: "afghanistan", nombre: "Afganistán", code: "af", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "albania", nombre: "Albania", code: "al", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "algeria", nombre: "Argelia", code: "dz", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "andorra", nombre: "Andorra", code: "ad", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "angola", nombre: "Angola", code: "ao", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "antigua and barbuda", nombre: "Antigua y Barbuda", code: "ag", difficulty: 3, continent: "America", classic: "no" },
    { name: "argentina", nombre: "Argentina", code: "ar", difficulty: 1, continent: "America", classic: "yes" },
    { name: "armenia", nombre: "Armenia", code: "am", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "australia", nombre: "Australia", code: "au", difficulty: 1, continent: "Oceania", classic: "yes" },
    { name: "austria", nombre: "Austria", code: "at", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "azerbaijan", nombre: "Azerbaiyán", code: "az", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bahamas", nombre: "Bahamas", code: "bs", difficulty: 3, continent: "America", classic: "yes" },
    { name: "bahrain", nombre: "Baréin", code: "bh", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bangladesh", nombre: "Bangladés", code: "bd", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "barbados", nombre: "Barbados", code: "bb", difficulty: 3, continent: "America", classic: "no" },
    { name: "belarus", nombre: "Bielorrusia", code: "by", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "belgium", nombre: "Bélgica", code: "be", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "belize", nombre: "Belice", code: "bz", difficulty: 3, continent: "America", classic: "yes" },
    { name: "benin", nombre: "Benín", code: "bj", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "bhutan", nombre: "Bután", code: "bt", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bolivia", nombre: "Bolivia", code: "bo", difficulty: 3, continent: "America", classic: "yes" },
    { name: "bosnia and herzegovina", nombre: "Bosnia y Herzegovina", code: "ba", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "botswana", nombre: "Botsuana", code: "bw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "brazil", nombre: "Brasil", code: "br", difficulty: 1, continent: "America", classic: "yes" },
    { name: "brunei", nombre: "Brunéi", code: "bn", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "bulgaria", nombre: "Bulgaria", code: "bg", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "burkina faso", nombre: "Burkina Faso", code: "bf", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "burundi", nombre: "Burundi", code: "bi", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "cabo verde", nombre: "Cabo Verde", code: "cv", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "cambodia", nombre: "Camboya", code: "kh", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "cameroon", nombre: "Camerún", code: "cm", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "canada", nombre: "Canadá", code: "ca", difficulty: 1, continent: "America", classic: "yes" },
    { name: "central african republic", nombre: "República Centroafricana", code: "cf", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "chad", nombre: "Chad", code: "td", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "chile", nombre: "Chile", code: "cl", difficulty: 2, continent: "America", classic: "yes" },
    { name: "china", nombre: "China", code: "cn", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "colombia", nombre: "Colombia", code: "co", difficulty: 2, continent: "America", classic: "yes" },
    { name: "comoros", nombre: "Comoras", code: "km", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "congo", nombre: "Congo", code: "cg", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "costa rica", nombre: "Costa Rica", code: "cr", difficulty: 2, continent: "America", classic: "yes" },
    { name: "croatia", nombre: "Croacia", code: "hr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "cuba", nombre: "Cuba", code: "cu", difficulty: 2, continent: "America", classic: "yes" },
    { name: "cyprus", nombre: "Chipre", code: "cy", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "czechia", nombre: "Chequia", code: "cz", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "democratic republic of the congo", nombre: "República Democrática del Congo", code: "cd", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "denmark", nombre: "Dinamarca", code: "dk", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "djibouti", nombre: "Yibuti", code: "dj", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "dominica", nombre: "Dominica", code: "dm", difficulty: 3, continent: "America", classic: "no" },
    { name: "dominican republic", nombre: "República Dominicana", code: "do", difficulty: 2, continent: "America", classic: "yes" },
    { name: "ecuador", nombre: "Ecuador", code: "ec", difficulty: 2, continent: "America", classic: "yes" },
    { name: "egypt", nombre: "Egipto", code: "eg", difficulty: 1, continent: "Africa", classic: "yes" },
    { name: "el salvador", nombre: "El Salvador", code: "sv", difficulty: 3, continent: "America", classic: "yes" },
    { name: "equatorial guinea", nombre: "Guinea Ecuatorial", code: "gq", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "eritrea", nombre: "Eritrea", code: "er", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "estonia", nombre: "Estonia", code: "ee", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "eswatini", nombre: "Esuatini", code: "sz", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "ethiopia", nombre: "Etiopía", code: "et", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "fiji", nombre: "Fiyi", code: "fj", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "finland", nombre: "Finlandia", code: "fi", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "france", nombre: "Francia", code: "fr", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "gabon", nombre: "Gabón", code: "ga", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "gambia", nombre: "Gambia", code: "gm", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "georgia", nombre: "Georgia", code: "ge", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "germany", nombre: "Alemania", code: "de", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "ghana", nombre: "Ghana", code: "gh", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "greece", nombre: "Grecia", code: "gr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "grenada", nombre: "Granada", code: "gd", difficulty: 3, continent: "America", classic: "no" },
    { name: "guatemala", nombre: "Guatemala", code: "gt", difficulty: 3, continent: "America", classic: "yes" },
    { name: "guinea", nombre: "Guinea", code: "gn", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "guinea-bissau", nombre: "Guinea-Bisáu", code: "gw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "guyana", nombre: "Guyana", code: "gy", difficulty: 3, continent: "America", classic: "yes" },
    { name: "haiti", nombre: "Haití", code: "ht", difficulty: 3, continent: "America", classic: "yes" },
    { name: "honduras", nombre: "Honduras", code: "hn", difficulty: 3, continent: "America", classic: "yes" },
    { name: "hungary", nombre: "Hungría", code: "hu", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "iceland", nombre: "Islandia", code: "is", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "india", nombre: "India", code: "in", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "indonesia", nombre: "Indonesia", code: "id", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "iran", nombre: "Irán", code: "ir", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "iraq", nombre: "Irak", code: "iq", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "ireland", nombre: "Irlanda", code: "ie", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "israel", nombre: "Israel", code: "il", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "italy", nombre: "Italia", code: "it", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "ivory coast", nombre: "Costa de Marfil", code: "ci", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "jamaica", nombre: "Jamaica", code: "jm", difficulty: 2, continent: "America", classic: "yes" },
    { name: "japan", nombre: "Japón", code: "jp", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "jordan", nombre: "Jordania", code: "jo", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "kazakhstan", nombre: "Kazajistán", code: "kz", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "kenya", nombre: "Kenia", code: "ke", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "kiribati", nombre: "Kiribati", code: "ki", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "kuwait", nombre: "Kuwait", code: "kw", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "kyrgyzstan", nombre: "Kirguistán", code: "kg", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "laos", nombre: "Laos", code: "la", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "latvia", nombre: "Letonia", code: "lv", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "lebanon", nombre: "Líbano", code: "lb", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "lesotho", nombre: "Lesoto", code: "ls", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "liberia", nombre: "Liberia", code: "lr", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "libya", nombre: "Libia", code: "ly", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "liechtenstein", nombre: "Liechtenstein", code: "li", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "lithuania", nombre: "Lituania", code: "lt", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "luxembourg", nombre: "Luxemburgo", code: "lu", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "madagascar", nombre: "Madagascar", code: "mg", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "malawi", nombre: "Malaui", code: "mw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "malaysia", nombre: "Malasia", code: "my", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "maldives", nombre: "Maldivas", code: "mv", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "mali", nombre: "Malí", code: "ml", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "malta", nombre: "Malta", code: "mt", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "marshall islands", nombre: "Islas Marshall", code: "mh", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "mauritania", nombre: "Mauritania", code: "mr", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "mauritius", nombre: "Mauricio", code: "mu", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "mexico", nombre: "México", code: "mx", difficulty: 1, continent: "America", classic: "yes" },
    { name: "micronesia", nombre: "Micronesia", code: "fm", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "moldova", nombre: "Moldavia", code: "md", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "monaco", nombre: "Mónaco", code: "mc", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "mongolia", nombre: "Mongolia", code: "mn", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "montenegro", nombre: "Montenegro", code: "me", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "morocco", nombre: "Marruecos", code: "ma", difficulty: 2, continent: "Africa", classic: "yes" },
    { name: "mozambique", nombre: "Mozambique", code: "mz", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "myanmar", nombre: "Myanmar", code: "mm", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "namibia", nombre: "Namibia", code: "na", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "nauru", nombre: "Nauru", code: "nr", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "nepal", nombre: "Nepal", code: "np", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "netherlands", nombre: "Países Bajos", code: "nl", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "new zealand", nombre: "Nueva Zelanda", code: "nz", difficulty: 1, continent: "Oceania", classic: "no" },
    { name: "nicaragua", nombre: "Nicaragua", code: "ni", difficulty: 3, continent: "America", classic: "yes" },
    { name: "niger", nombre: "Níger", code: "ne", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "nigeria", nombre: "Nigeria", code: "ng", difficulty: 1, continent: "Africa", classic: "no" },
    { name: "north korea", nombre: "Corea del Norte", code: "kp", difficulty: 2, continent: "Asia", classic: "yes" },
    { name: "north macedonia", nombre: "Macedonia del Norte", code: "mk", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "norway", nombre: "Noruega", code: "no", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "oman", nombre: "Omán", code: "om", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "pakistan", nombre: "Pakistán", code: "pk", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "palau", nombre: "Palaos", code: "pw", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "palestine", nombre: "Palestina", code: "ps", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "panama", nombre: "Panamá", code: "pa", difficulty: 3, continent: "America", classic: "yes" },
    { name: "papua new guinea", nombre: "Papúa Nueva Guinea", code: "pg", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "paraguay", nombre: "Paraguay", code: "py", difficulty: 3, continent: "America", classic: "yes" },
    { name: "peru", nombre: "Perú", code: "pe", difficulty: 2, continent: "America", classic: "yes" },
    { name: "philippines", nombre: "Filipinas", code: "ph", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "poland", nombre: "Polonia", code: "pl", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "portugal", nombre: "Portugal", code: "pt", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "qatar", nombre: "Catar", code: "qa", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "romania", nombre: "Rumania", code: "ro", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "russia", nombre: "Rusia", code: "ru", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "rwanda", nombre: "Ruanda", code: "rw", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "saint kitts and nevis", nombre: "San Cristóbal y Nieves", code: "kn", difficulty: 3, continent: "America", classic: "no" },
    { name: "saint lucia", nombre: "Santa Lucía", code: "lc", difficulty: 3, continent: "America", classic: "no" },
    { name: "saint vincent and the grenadines", nombre: "San Vicente y las Granadinas", code: "vc", difficulty: 3, continent: "America", classic: "no" },
    { name: "samoa", nombre: "Samoa", code: "ws", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "san marino", nombre: "San Marino", code: "sm", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "sao tome and principe", nombre: "Santo Tomé y Príncipe", code: "st", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "saudi arabia", nombre: "Arabia Saudita", code: "sa", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "senegal", nombre: "Senegal", code: "sn", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "serbia", nombre: "Serbia", code: "rs", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "seychelles", nombre: "Seychelles", code: "sc", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "sierra leone", nombre: "Sierra Leona", code: "sl", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "singapore", nombre: "Singapur", code: "sg", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "slovakia", nombre: "Eslovaquia", code: "sk", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "slovenia", nombre: "Eslovenia", code: "si", difficulty: 3, continent: "Europe", classic: "yes" },
    { name: "solomon islands", nombre: "Islas Salomón", code: "sb", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "somalia", nombre: "Somalia", code: "so", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "south africa", nombre: "Sudáfrica", code: "za", difficulty: 1, continent: "Africa", classic: "yes" },
    { name: "south korea", nombre: "Corea del Sur", code: "kr", difficulty: 1, continent: "Asia", classic: "yes" },
    { name: "south sudan", nombre: "Sudán del Sur", code: "ss", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "spain", nombre: "España", code: "es", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "sri lanka", nombre: "Sri Lanka", code: "lk", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "sudan", nombre: "Sudán", code: "sd", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "suriname", nombre: "Surinam", code: "sr", difficulty: 3, continent: "America", classic: "yes" },
    { name: "sweden", nombre: "Suecia", code: "se", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "switzerland", nombre: "Suiza", code: "ch", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "syria", nombre: "Siria", code: "sy", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "taiwan", nombre: "Taiwán", code: "tw", difficulty: 2, continent: "Asia", classic: "no" },
    { name: "tajikistan", nombre: "Tayikistán", code: "tj", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "tanzania", nombre: "Tanzania", code: "tz", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "thailand", nombre: "Tailandia", code: "th", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "timor-leste", nombre: "Timor Oriental", code: "tl", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "togo", nombre: "Togo", code: "tg", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "tonga", nombre: "Tonga", code: "to", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "trinidad and tobago", nombre: "Trinidad y Tobago", code: "tt", difficulty: 3, continent: "America", classic: "yes" },
    { name: "tunisia", nombre: "Túnez", code: "tn", difficulty: 2, continent: "Africa", classic: "no" },
    { name: "turkey", nombre: "Turquía", code: "tr", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "turkmenistan", nombre: "Turkmenistán", code: "tm", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "tuvalu", nombre: "Tuvalu", code: "tv", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "uganda", nombre: "Uganda", code: "ug", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "ukraine", nombre: "Ucrania", code: "ua", difficulty: 2, continent: "Europe", classic: "yes" },
    { name: "united arab emirates", nombre: "Emiratos Árabes Unidos", code: "ae", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "united kingdom", nombre: "Reino Unido", code: "gb", difficulty: 1, continent: "Europe", classic: "yes" },
    { name: "united states", nombre: "Estados Unidos", code: "us", difficulty: 1, continent: "America", classic: "yes" },
    { name: "uruguay", nombre: "Uruguay", code: "uy", difficulty: 2, continent: "America", classic: "yes" },
    { name: "uzbekistan", nombre: "Uzbekistán", code: "uz", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "vanuatu", nombre: "Vanuatu", code: "vu", difficulty: 3, continent: "Oceania", classic: "no" },
    { name: "vatican city", nombre: "Ciudad del Vaticano", code: "va", difficulty: 3, continent: "Europe", classic: "no" },
    { name: "venezuela", nombre: "Venezuela", code: "ve", difficulty: 2, continent: "America", classic: "yes" },
    { name: "vietnam", nombre: "Vietnam", code: "vn", difficulty: 1, continent: "Asia", classic: "no" },
    { name: "yemen", nombre: "Yemen", code: "ye", difficulty: 3, continent: "Asia", classic: "no" },
    { name: "zambia", nombre: "Zambia", code: "zm", difficulty: 3, continent: "Africa", classic: "no" },
    { name: "zimbabwe", nombre: "Zimbabue", code: "zw", difficulty: 3, continent: "Africa", classic: "no" }
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
let Reebot = false;
let shut = false;
let en = true;

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
const btnEn = document.getElementById('btn-en');
const btnEs = document.getElementById('btn-es');

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
btnEs.addEventListener('click', espanol);
btnEn.addEventListener('click', english);

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
  'images/paper.png', 'images/UI-00.webp','images/book-ep1.webp',
  'images/book-ep2.webp', 'images/book-ep3.webp', 'images/book-ep4.webp',
  'images/boowebpp5.webp', 'images/book-ep6.webp', 'images/book-ep7.webp',
  'images/book-ep8.webp', 'images/book-ep9.webp'
];

function preloadImages() {
  if (imagePaths.length === 0) return;

  const promises = imagePaths.map(path => new Promise(resolve => {
    const img = new Image();
    
    img.onload = resolve;
    img.onerror = resolve; 
    
    img.src = path;
  }));
  Promise.all(promises).then(() => {
    closeLoading();
    
  });
  english();
}

document.addEventListener('DOMContentLoaded', preloadImages);

function shutAudio(){
    AudioC.pause();
    AudioI.pause();
    AudioBook.pause();
    AudioStart.pause();
    AudioInfo.pause();
    AudioMaster.pause();
    AudioHighScore.pause();
    AudioGameover.pause();
    AudioC.currentTime = 0;
    AudioI.currentTime = 0; 
    AudioBook.currentTime = 0;
    AudioStart.currentTime = 0;
    AudioInfo.currentTime = 0;
    AudioMaster.currentTime = 0;
    AudioHighScore.currentTime = 0;
    AudioGameover.currentTime = 0;
}


function changePage(){
    if (en){
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
    }else{
        if (actualPage === 1){
            bookPage.src = 'images/book-ep1.webp';
            btnBackBook.style.opacity = 0;
            btnBackBook.style.pointerEvents = 'none';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 2){
            bookPage.src = 'images/book-ep2.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 3){
            bookPage.src = 'images/book-ep3.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 4){
            bookPage.src = 'images/book-ep4.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 5){
            bookPage.src = 'images/book-ep5.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 6){
            bookPage.src = 'images/book-ep6.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 7){
            bookPage.src = 'images/book-ep7.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 8){
            bookPage.src = 'images/book-ep8.webp';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
            btnNextBook.style.opacity = 1;
            btnNextBook.style.pointerEvents = 'inherit';
        }
        else if (actualPage === 9){
            bookPage.src = 'images/book-ep9.webp';
            btnNextBook.style.opacity = 0;
            btnNextBook.style.pointerEvents = 'none';
            btnBackBook.style.opacity = 1;
            btnBackBook.style.pointerEvents = 'inherit';
        }
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
function espanol(){
    en = false;
    changePage();
    btnEs.querySelector('img').style.filter = 'sepia(0)';
    btnEs.querySelector('img').style.transform = 'scale(1.2)';

    btnEn.querySelector('img').style.filter = 'sepia(100)';
    btnEn.querySelector('img').style.transform = 'scale(1)';
}
function english(){
    en = true;
    changePage();
    btnEs.querySelector('img').style.filter = 'sepia(100)';
    btnEs.querySelector('img').style.transform = 'scale(1)';

    btnEn.querySelector('img').style.filter = 'sepia(0)';
    btnEn.querySelector('img').style.transform = 'scale(1.2)';
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
    } else if (info.style.opacity === "1"){
        closeInfo();
    } else {
        openInfo();
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
        else if (libro.style.opacity === "1" && info.style.opacity === "0" && menu.style.opacity === "1"){
            skip();
        }
        else if (libro.style.opacity === "0" && info.style.opacity === "0" && menu.style.opacity === "1"){
            skip();
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
        if (Reebot) return;
        Reebot = true;
        startGame();
        setTimeout(() => {
            Reebot = false;
        }, 400); 
    }
    if (event.key === "7") {
        if (shut) return;
        shut = true;
        gameShut();
        setTimeout(() => {
            shut = false;
        }, 400); 
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
    shutAudio();
    gameShut();
    banderasCorrectas = 0;
    closeBook();
    closeInfo();
    skip();
    music.currentTime = 0;
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
    let correctAnswer = "";

    if(en){
        correctAnswer = cleanText(currentCountry.name);
    }else{
        correctAnswer = cleanText(currentCountry.nombre);
    }

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
        displayRemaining.textContent = String("0")
        mTitle.textContent = 'HAIL MASTER OF FLAGS!';
        AudioMaster.play();
    } else if (availableCountries.length === 0 && lives < 3 ){
        if (score > highScore) {
            displayRemaining.textContent = String("0")
            mTitle.textContent = 'IMPRESSIVE NEW HIGHSCORE';
            AudioHighScore.play();
        } else {
            displayRemaining.textContent = String("0")
            if(lives === 1){
                mTitle.textContent = '1 LIFE AWAY FROM GLORY';
            }else{
                mTitle.textContent = (3-lives) + ' LIVES AWAY FROM GLORY';
            }
            
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

function gameShut() {
    shutAudio();
    music.pause();
    inputCountry.disabled = true;
    inputCountry.value = '';
    inputCountry.placeholder = 'ENTER COUNTRY';
    flagImg.src = 'images/flags/xx.webp'; 
    btnPlay.disabled = false; 
    time = 0;
    stopTime();
    lives = 0;
    availableCountries = 0;
    displayTime.textContent = String(time).padStart(6, '0');
    displayRemaining.textContent = String("0")
    displayScore.textContent = String("0").padStart(6, '0');
}