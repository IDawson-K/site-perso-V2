//Fonction black
function black() {
    document.querySelector('#curseur').classList.add('black');
}

function white() {
    document.querySelector('#curseur').classList.remove('black');
}

// Curseur
window.addEventListener('mousemove', cursor);

function cursor(e) {
    document.querySelector('#curseur').style.top = e.pageY + 'px';
    document.querySelector('#curseur').style.left = e.pageX + 'px';
}

//Hover sur input
function hoverinput() {
    document.querySelector('#curseur').classList.add('curseurinput');
}

function hoverinputleave() {
    document.querySelector('#curseur').classList.remove('curseurinput');
}

//Contact, verif si y'a un email
function contact() {
    var StrObj = document.querySelector('#area').value;
    var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emailsArray != null && emailsArray.length) {
        document.querySelector('#Ty').classList.add('apparait');
        document.querySelector('#Ty').classList.remove('disparait');
    } else {
        document.querySelector('#Ad').classList.add('apparait');
        document.querySelector('#Ad').classList.remove('disparait');
    }
}

function removealert() {
    document.querySelector('#Ad').classList.remove('apparait');
    document.querySelector('#Ad').classList.add('disparait');
}

function removeTy() {
    document.querySelector('#Ty').classList.remove('apparait');
    document.querySelector('#Ty').classList.add('disparait');
}

// fonctions copier
function copieduno() {
    document.querySelector('#tel').innerHTML = '📞 Copied';
    navigator.clipboard.writeText('06 99 72 12 84');
}

function copieddos() {
    document.querySelector('#mail').innerHTML = '📧 Copied';
    navigator.clipboard.writeText('kramerdawson7@gmail.com')
}

//Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developpement", "Graphic Design", "3D Creation", "Video Editing"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
