"use strict";

const expanderBtn = document.getElementById("btn1");
const infoRecurringTripButton = document.getElementById("btn2");
const tripChoicesRecurring = document.getElementById("btn3");
let textExpand = document.getElementById("sect1");
let infoTextExpand = document.getElementById("sect2");
let infoChoicesText = document.getElementById("sect3");
const booktripButton = document.getElementById("booktrip");
const bookRecurringButton = document.getElementById("booktripRecurring");
const changetripButton = document.getElementById("changetrip");


window.onload = function() {

    const menu_btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".menulinks")

    // Hamburgarmeny. Kod från Tyler Potts, "Build a Slide out Hamburger Menu with HTML, CSS & JavaScript", https://www.youtube.com/watch?v=OFKBep95lb4&list=PLkh5fbQgkUKPmoO3YGOgikJpP4rqm5wQy&index=3 Publicerad 2021-01-15 Hämtad 2022-03-09

    menu_btn.addEventListener("click", function() {
        menu_btn.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    })

    handleRadioClick();
    handleRadioReturn();
    radioTripChoices();
    tripTypeChoice();
    tripTypeRecurring();
    timeReturnRecurringChoice();
    radioTripRecurringChoices();
    init;
}

// Val av typ av resa: vanlig (förinfyllt). Dessa funktioner avser vanlig resa. Kodsnutt från: Borislav Hadzhiev, "Show/Hide an element on Radio button Selection using JS", https://bobbyhadz.com/blog/javascript-show-hide-element-on-radio-button-click Publicerad 2022-01-06 Hämtad 2022-03-05. 
const simpleTripEl = document.getElementById('bookform');

function tripTypeChoice() {
    if (document.getElementById('simple')) {
        if (document.getElementById('simple').checked) {
            simpleTripEl.style.display = 'block';

        } else {
            simpleTripEl.style.display = 'none';
        }
    }
}

const triptypeButtons = document.querySelectorAll('input[name="choosetriptype"]');
triptypeButtons.forEach(radio => {
    radio.addEventListener('click', tripTypeChoice);
});

//Val av typ av resa: återkommande. Dessa funktioner avser återkommande resa. 
const recurringTripEl = document.getElementById('recurringform');

function tripTypeRecurring() {
    if (document.getElementById('recurring')) {
        if (document.getElementById('recurring').checked) {
            recurringTripEl.style.display = 'block';

        } else {
            recurringTripEl.style.display = 'none';
        }
    }
}


triptypeButtons.forEach(radio => {
    radio.addEventListener('click', tripTypeRecurring);
});

/* Visa input-fält där datum och tid fylls i, vid avresa */

const dateDivEl = document.getElementById('dateDiv');

function handleRadioClick() {
    if (document.getElementById('later')) {


        if (document.getElementById('later').checked) {
            dateDivEl.style.display = 'block';
        } else {
            dateDivEl.style.display = 'none';
        }
    }
}

const radioButtons = document.querySelectorAll('input[name="choosetime"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});


/* Visa input-fält där datum och tid fylls i, vid hemresa */
const dateDivReturnEl = document.getElementById('dateDivReturn');

function handleRadioReturn() {
    if (document.getElementById('return')) {
        if (document.getElementById('return').checked) {
            dateDivReturnEl.style.display = 'block';
        } else {
            dateDivReturnEl.style.display = 'none';
        }
    }
}

const returnButtons = document.querySelectorAll('input[name="returntrip"]');
returnButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioReturn);
});

/* Visa val vid anpassningar för resan */
const tripChoicesDivEl = document.getElementById('tripChoicesDiv');

function radioTripChoices() {
    if (document.getElementById('newPresets')) {
        if (document.getElementById('newPresets').checked) {
            tripChoicesDivEl.style.display = 'block';
        } else {
            tripChoicesDivEl.style.display = 'none';
        }
    }
}

const tripButtons = document.querySelectorAll('input[name="tripchoices"]');
tripButtons.forEach(radio => {
    radio.addEventListener('click', radioTripChoices);
});
// Visa val av tid för returresa vid anpassningar för återkommande resa 

const timeDivReturnRecurringEl = document.getElementById('timeDivReturnRecurring');

function timeReturnRecurringChoice() {
    if (document.getElementById('yesreturnRecurring')) {
        if (document.getElementById('yesreturnRecurring').checked) {
            timeDivReturnRecurringEl.style.display = 'block';
        } else {
            timeDivReturnRecurringEl.style.display = 'none';
        }
    }
}

const returnTimeRecurringRadio = document.querySelectorAll('input[name="returntripRecurring"]');
returnTimeRecurringRadio.forEach(radio => {
    radio.addEventListener('click', timeReturnRecurringChoice);
});

// Visa vid anpassningar för återkommande resa 

const tripChoicesDivRecurringEl = document.getElementById('tripChoicesDivRecurring');

function radioTripRecurringChoices() {
    if (document.getElementById('newPresetsRecurring')) {
        if (document.getElementById('newPresetsRecurring').checked) {
            tripChoicesDivRecurringEl.style.display = 'block';
        } else {
            tripChoicesDivRecurringEl.style.display = 'none';
        }
    }
}

const recurringTripButtons = document.querySelectorAll('input[name="tripchoicesRecurring"]');
recurringTripButtons.forEach(radio => {
    radio.addEventListener('click', radioTripRecurringChoices);
});



//Koll om variabeln finns på sida man är inne på: 
if (expanderBtn) {
    expanderBtn.addEventListener('click', openButton, false);
}

// Knappar som öppnas. Kod (något ändrad av mig) från : Malin Larsson, Mittuniversitetet


function openButton() {

    //Kontroll om article är synlig
    if (textExpand.style.display === "block") {
        //Är den synlig så döljs den med css
        textExpand.style.display = "none";

        //Ändrar aria-expended från true till false(infälld knapp)
        expanderBtn.setAttribute("aria-expanded", "false");

        //Ändrar pil-ikon
        expanderBtn.firstElementChild.classList.remove("fa-chevron-up");
        expanderBtn.firstElementChild.classList.add("fa-chevron-down");

    } else {
        //article-visas
        textExpand.style.display = "block";

        //Ändrar aria-expanded från false till true(utvidgad knapp)
        expanderBtn.setAttribute("aria-expanded", "true");

        //ändrar pil-ikon
        expanderBtn.firstElementChild.classList.remove("fa-chevron-down");
        expanderBtn.firstElementChild.classList.add("fa-chevron-up");
    }
}

if (infoRecurringTripButton) {
    infoRecurringTripButton.addEventListener('click', openRecurringTripInfo, false);
}


function openRecurringTripInfo() {
    //Kontroll om article är synlig
    if (infoTextExpand.style.display === "block") {
        //Är den synlig så döljs den med css
        infoTextExpand.style.display = "none";

        //Ändrar aria-expended från true till false(infälld knapp)
        infoRecurringTripButton.setAttribute("aria-expanded", "false");

        //Ändrar pil-ikon
        infoRecurringTripButton.firstElementChild.classList.remove("fa-chevron-up");
        infoRecurringTripButton.firstElementChild.classList.add("fa-chevron-down");

    } else {
        //article-visas
        infoTextExpand.style.display = "block";

        //Ändrar aria-expanded från false till true(utvidgad knapp)
        infoRecurringTripButton.setAttribute("aria-expanded", "true");

        //ändrar pil-ikon
        infoRecurringTripButton.firstElementChild.classList.remove("fa-chevron-down");
        infoRecurringTripButton.firstElementChild.classList.add("fa-chevron-up");
    }
}

if (tripChoicesRecurring) {
    tripChoicesRecurring.addEventListener('click', recurringTripChoices, false);
}


function recurringTripChoices() {
    //Kontroll om article är synlig
    if (infoChoicesText.style.display === "block") {
        //Är den synlig så döljs den med css
        infoChoicesText.style.display = "none";

        //Ändrar aria-expended från true till false(infälld knapp)
        tripChoicesRecurring.setAttribute("aria-expanded", "false");

        //Ändrar pil-ikon
        tripChoicesRecurring.firstElementChild.classList.remove("fa-chevron-up");
        tripChoicesRecurring.firstElementChild.classList.add("fa-chevron-down");

    } else {
        //article-visas
        infoChoicesText.style.display = "block";

        //Ändrar aria-expanded från false till true(utvidgad knapp)
        tripChoicesRecurring.setAttribute("aria-expanded", "true");

        //ändrar pil-ikon
        tripChoicesRecurring.firstElementChild.classList.remove("fa-chevron-down");
        tripChoicesRecurring.firstElementChild.classList.add("fa-chevron-up");
    }
}


// Boka resa-knappar 
if (booktripButton) {
    booktripButton.addEventListener('click', confirmtrip, false);
}

if (changetripButton) {
    changetripButton.addEventListener("click", confirmtripchange, false);
}

function confirmtrip() {
    let bookformEl = document.getElementById("bookform");
    let bookText = document.createElement("p");
    bookformEl.appendChild(bookText);
    bookText.classList.add("bookText");
    bookText.innerHTML = "Resan är bokad!";
    booktripButton.remove();

}

//Knapp för att boka återkommande resa
if (bookRecurringButton) {
    bookRecurringButton.addEventListener('click', confirmrecurringtrip, false);
}

function confirmrecurringtrip() {
    let recurringformEl = document.getElementById("recurringform");
    let confirmText = document.createElement("p");
    recurringformEl.appendChild(confirmText);
    confirmText.classList.add("bookText");

    confirmText.innerHTML = "Resan är bokad!";
    bookRecurringButton.remove();

}
//Funktion för att spara ändringar på en resa
function confirmtripchange() {
    let bookformEl = document.getElementById("bookform");
    let bookText = document.createElement("p");
    bookformEl.appendChild(bookText);
    bookText.classList.add("bookText");
    bookText.innerHTML = "Ändringarna är sparade!";
    changetripButton.remove();
}



//funktion för att ta bort inplanerad resa
if (document.getElementById("canceltrip1")) {
    const cancel = document.getElementById("canceltrip1");
    cancel.addEventListener("click", tabort);
}
if (document.getElementById("canceltrip2")) {
    const cancel2 = document.getElementById("canceltrip2");
    cancel2.addEventListener("click", tabort);
}
if (document.getElementById("canceltrip3")) {
    const cancel3 = document.getElementById("canceltrip3");
    cancel3.addEventListener("click", tabort);
}

function tabort() {
    alert("Är du säker på att du vill ta bort resan?");
    this.parentElement.remove();
}


//Funktion från Malin Larsson Mittuniversitetet, 
function init() {

    //Hämtar in knapparna
    const expanderBtn = document.getElementsByClassName("expanderBtn");

    //Lägger en händelselyssnare på varje knapp
    for (let i = 0; i < expanderBtn.length; i++) {

        expanderBtn[i].addEventListener("click", function() {
            //Hämtar in nästa element vilket blir article-elementet efter knappen som trycks
            let textExpand = this.nextElementSibling;

            //Kontroll om article är synlig
            if (textExpand.style.display === "block") {
                //Är den synlig så döljs den med css
                textExpand.style.display = "none";

                //Ändrar aria-expended från true till false(infälld knapp)
                this.setAttribute("aria-expanded", "false");

                //Ändrar pil-ikon
                this.firstElementChild.classList.remove("fa-chevron-up");
                this.firstElementChild.classList.add("fa-chevron-down");

            } else {
                //article-visas
                textExpand.style.display = "block";

                //Ändrar aria-expanded från false till true(utvidgad knapp)
                this.setAttribute("aria-expanded", "true");

                //ändrar pil-ikon
                this.firstElementChild.classList.remove("fa-chevron-down");
                this.firstElementChild.classList.add("fa-chevron-up");
            }
        })
    }

}