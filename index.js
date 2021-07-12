//Hamburger Menu
let hamburger = document.getElementsByClassName("fas")[0];
let links = document.getElementsByClassName("header-links")[0];


hamburger.addEventListener("click", () => {
    links.classList.toggle("show")
})



//Language Change
let verse = document.getElementById("verse-p");
let verse2= document.getElementById("verse2");
let englishEl = document.getElementById("english-btn");
let swahiliEl = document.getElementById("swahili-btn");
let kisiiEl = document.getElementById("kisii-btn");


//VERSES
//VERSE 1
let englishVerse = '"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand"';

let swahiliVerse = '"Basi usiogope, kwa maana mimi niko pamoja nawe; usifadhaike, kwa maana mimi ni Mungu wako. Nitakutia nguvu na kukusaidia; Nitakushika kwa mkono wangu wa kuume wa haki"';

let kisiiVerse = '"Ase ayio timoiroka, inche nigo inde amo nainwe, timoichana, inche ninche Nyasae oino; nimbabeke chinguru, mbakonye, nimbasiire nokoboko gw\'okioro kw\'oborongo bwane"';


//VERSE2
let englishVerse2 = '"Rejoice to the Lord always and again I say rejoice"';

let swahiliVerse2 = '"Furahini kwa Bwana daima na tena nasema furaha"';

let kisiiVerse2 = '"Furahini kwa Bwana daima na tena nasema furaha"';

//VERSES(END)


//OTHER TEXT
let churchNote = document.querySelector('#church-p');
let elderNote = document.querySelector('#elder-p');

let englishChurchNote = '"Praise God! We take this opportunity to welcome you to the Nyabera Central SDA Church site. Our Church Family wants you to know that we are dedicated to meeting the spititual needs of people wherever they are in life. Therefore, the simple purpose of our website is to introduce you to those areas of our ministry which are relevant to your life."';

let swahiliChurchNote = '"Msifuni Mungu! Tunachukua fursa hii kuwakaribisha kwenye tovuti ya Kanisa la Nyabera Central SDA. Familia yetu ya Kanisa inataka ujue kwamba tumejitolea kukidhi mahitaji ya kiroho ya watu popote walipo katika maisha. Kwa hiyo, madhumuni rahisi ya tovuti yetu ni kukutambulisha kwa maeneo hayo ya huduma yetu ambayo yanafaa kwa maisha yako."';


let englishElderNote = '""This is another milestone in our church development of trying to share the word of God and also communicate during this hard time of COVID-19. Feel free to join us and let\'s make Christ known across the world."';

let swahiliElderNote = '"Hii ni hatua nyingine muhimu katika maendeleo ya kanisa letu ya kujaribu kushiriki neno la Mungu na pia kuwasiliana wakati huu mgumu wa COVID-19. Jisikie huru kujiunga nasi na hebu tumfanye Kristo ajulikane kote duniani."';



englishEl.addEventListener('click', ()=>{
    verse.textContent = englishVerse;
    verse2.textContent = englishVerse2;
    churchNote.textContent = englishChurchNote;
    elderNote.textContent = englishElderNote;
})

swahiliEl.addEventListener('click', ()=>{
    verse.textContent = swahiliVerse;
    verse2.textContent = swahiliVerse2;
    churchNote.textContent = swahiliChurchNote;
    elderNote.textContent = swahiliElderNote;
})

kisiiEl.addEventListener('click', ()=>{
    verse.textContent = kisiiVerse;
    verse2.textContent = kisiiVerse2;
})