"use strict";

/* SELECTIONS */
const popup = document.querySelector(".popup");
const background = document.querySelector(".background");
const btnClosePopup = document.querySelector(".close-popup");
const btnShowPopup = document.querySelectorAll(".show-popup");

/* FUNCTIONS */

const openPopup = function () {
  console.log("button clicked");
  popup.classList.remove("hidden");
  background.classList.remove("hidden");
};

const closePopup = function () {
  popup.classList.add("hidden");
  background.classList.add("hidden");
};

/***************/
/***************/

for (let i = 0; i < btnShowPopup.length; i++)
  btnShowPopup[i].addEventListener("click", openPopup);

btnClosePopup.addEventListener("click", closePopup);

background.addEventListener("click", closePopup);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});
