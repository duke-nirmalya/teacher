/* ========================================= */
/* SELECT ELEMENTS */
/* ========================================= */

const openButton =
document.getElementById("openButton");

const openingScreen =
document.getElementById("openingScreen");

const letterContainer =
document.getElementById("letterContainer");

const yesButton =
document.getElementById("yesButton");

const noButton =
document.getElementById("noButton");

const celebration =
document.getElementById("celebration");

const closeButton =
document.getElementById("closeButton");

const backButton =
document.getElementById("backButton");

const memoryScreen =
document.getElementById("memoryScreen");

const funnyMessage =
document.getElementById("funnyMessage");

const memoryDate =
document.getElementById("memoryDate");

const floatingContainer =
document.getElementById("floatingContainer");

/* ========================================= */
/* OPEN LETTER */
/* ========================================= */

openButton.addEventListener("click", function () {

openingScreen.classList.add("hide");


setTimeout(function () {

    openingScreen.style.display = "none";

    letterContainer.classList.add("show");

    createFloatingElements(12);

}, 700);


});

/* ========================================= */
/* FUNNY NO BUTTON MESSAGES */
/* ========================================= */

const funnyMessages = [

"😂 Oops! The NO button escaped!",

"😜 Nice try, Sir!",

"🏃 The NO button says: Catch me if you can!",

"🙈 Oh no! You almost touched it!",

"🤣 Sir, the button doesn't want to say NO!",

"😆 The button has officially entered RUNNING MODE!",

"🏃‍♂️💨 Faster, Sir! Maybe next time!",

"😂 At this point, YES is your only option!",

"😇 The universe clearly wants you to choose YES!",

"🤣 NO has left the classroom!",

"📚 Even the NO button knows you're our best mentor!",

"😂 Okay Sir... we know you want to press YES!"

];

let noCount = 0;

/* ========================================= */
/* MOVE NO BUTTON */
/* ========================================= */

function moveNoButton() {

noCount++;


/* ----------------------------- */
/* MESSAGE */
/* ----------------------------- */

const index =
    (noCount - 1) %
    funnyMessages.length;


funnyMessage.textContent =
    funnyMessages[index];


/* Restart animation */

funnyMessage.classList.remove("pop");

void funnyMessage.offsetWidth;

funnyMessage.classList.add("pop");


/* ----------------------------- */
/* RANDOM POSITION */
/* ----------------------------- */

const buttonWidth =
    noButton.offsetWidth;

const buttonHeight =
    noButton.offsetHeight;


const maxX =
    window.innerWidth -
    buttonWidth -
    20;


const maxY =
    window.innerHeight -
    buttonHeight -
    20;


const randomX =
    Math.max(
        10,
        Math.floor(
            Math.random() * maxX
        )
    );


const randomY =
    Math.max(
        10,
        Math.floor(
            Math.random() * maxY
        )
    );


/* ----------------------------- */
/* MOVE BUTTON */
/* ----------------------------- */

noButton.style.position =
    "fixed";


noButton.style.left =
    randomX + "px";


noButton.style.top =
    randomY + "px";


/* ----------------------------- */
/* RANDOM ROTATION */
/* ----------------------------- */

const rotation =
    Math.floor(
        Math.random() * 50
    ) - 25;


noButton.style.transform =
    `rotate(${rotation}deg)`;


/* ----------------------------- */
/* SMALL EFFECT */
/* ----------------------------- */

createFloatingElements(3);

}

/* ========================================= */
/* DESKTOP */
/* ========================================= */

noButton.addEventListener(
"mouseenter",
moveNoButton
);

/* ========================================= */
/* MOBILE TOUCH */
/* ========================================= */

noButton.addEventListener(
"touchstart",
function (event) {

    event.preventDefault();

    moveNoButton();

},
{
    passive: false
}

);

/* ========================================= */
/* CLICK */
/* ========================================= */

noButton.addEventListener(
"click",
function (event) {

    event.preventDefault();

    moveNoButton();

}


);

/* ========================================= */
/* YES BUTTON */
/* ========================================= */

yesButton.addEventListener(
"click",
function () {

    celebration.classList.add("show");

    createCelebration();

}


);

/* ========================================= */
/* CELEBRATION */
/* ========================================= */

function createCelebration() {

const symbols = [

    "🎉",
    "⭐",
    "✨",
    "🌟",
    "💫",
    "🎓",
    "📚",
    "❤️",
    "👏",
    "🏆",
    "🥳"

];


for (let i = 0; i < 50; i++) {

    setTimeout(function () {

        createFloating(symbols);

    }, i * 60);

}


}

/* ========================================= */
/* KEEP THIS MEMORY */
/* ========================================= */

closeButton.addEventListener(
"click",
function () {

    /*
     * Hide celebration
     */

    celebration.classList.remove("show");


    /*
     * Generate today's date
     */

    const today =
        new Date();


    const formattedDate =
        today.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    memoryDate.textContent =
        "📅 " + formattedDate;


    /*
     * Show memory screen
     */

    setTimeout(function () {

        memoryScreen.classList.add("show");

        createMemoryCelebration();

    }, 400);

}


);

/* ========================================= */
/* MEMORY CELEBRATION */
/* ========================================= */

function createMemoryCelebration() {


const symbols = [

    "🧠",
    "💖",
    "⭐",
    "✨",
    "🌟",
    "🎓",
    "📚",
    "💫",
    "❤️"

];


for (let i = 0; i < 35; i++) {

    setTimeout(function () {

        createFloating(symbols);

    }, i * 80);

}


}

/* ========================================= */
/* BACK TO LETTER */
/* ========================================= */

backButton.addEventListener(
"click",
function () {


    memoryScreen.classList.remove("show");

}

);

/* ========================================= */
/* CREATE FLOATING ELEMENT */
/* ========================================= */

function createFloating(symbols) {


const element =
    document.createElement("div");


element.classList.add("floating");


/*
 * Random symbol
 */

element.textContent =
    symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
    ];


/*
 * Random position
 */

element.style.left =
    Math.random() * 100 + "%";


/*
 * Random size
 */

const size =
    Math.random() * 18 + 18;


element.style.fontSize =
    size + "px";


/*
 * Random speed
 */

const duration =
    Math.random() * 5 + 5;


element.style.animationDuration =
    duration + "s";


/*
 * Add to page
 */

floatingContainer.appendChild(
    element
);


/*
 * Remove after animation
 */

setTimeout(function () {

    element.remove();

}, duration * 1000);


}

/* ========================================= */
/* CREATE MULTIPLE FLOATING ELEMENTS */
/* ========================================= */

function createFloatingElements(
amount = 10
) {

const symbols = [

    "⭐",
    "✨",
    "🌟",
    "💫",
    "📚",
    "🎓",
    "🍎",
    "❤️"

];


for (
    let i = 0;
    i < amount;
    i++
) {

    createFloating(symbols);

}


}

/* ========================================= */
/* CONTINUOUS BACKGROUND EFFECT */
/* ========================================= */

setInterval(function () {

createFloatingElements(1);


}, 1400);
