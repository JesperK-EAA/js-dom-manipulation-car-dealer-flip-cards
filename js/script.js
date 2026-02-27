"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


// NYT NYT Vanilla JS

const car = new Audio("../sound/car-engine-sound.mp3");

const lamborghiniCard = document.getElementById("lamborghini");
const bmwCard = document.getElementById("bmw");
const mercedesCard = document.getElementById("mercedes");

if (lamborghiniCard) {
   console.log('1');
   
   lamborghiniCard.addEventListener("click", function() {
      car.play();
      console.log('play sound');
      lamborghiniCard.classList.toggle("flipped");
      console.log('toggle flipped');
   });
}

if (bmwCard) {
   bmwCard.addEventListener("click", function() {
      car.play();
      bmwCard.classList.toggle("flipped");
   });
}

if (mercedesCard) {
   mercedesCard.addEventListener("click", function() {
      car.play();
      mercedesCard.classList.toggle("flipped");
   });
}