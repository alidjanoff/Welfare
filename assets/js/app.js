/* ------------------------ START HEADER SLIDE EFFECT ----------------------- */
const header = document.querySelector("#header");

window.onscroll = function () {
  slideEffect();
  slideDown();
};

function slideEffect() {
  if (
    document.documentElement.scrollTop >= 80 ||
    document.body.scrollTop >= 80
  ) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

function slideDown() {
  if (
    document.documentElement.scrollTop > 175 ||
    document.body.scrollTop > 175
  ) {
    header.classList.add("top");
  } else {
    header.classList.remove("top");
  }
}
/* ------------------------- END HEADER SLIDE EFFECT ------------------------ */

/* ---------------------------- START Mobile Menu --------------------------- */
const menuBtn = document.querySelector(".openMenu");
const mobileMenu = document.querySelector(".mobileMenu");
let toggle = false;
menuBtn.addEventListener("click", () => {
  if (!toggle) {
    mobileMenu.style = "top: 0";
    toggle = true;
  } else {
    mobileMenu.style = "top: -508px";
    toggle = false;
  }
});
/* ----------------------------- END Mobile Menu ---------------------------- */

/* ---------------------------- Get Current Year ---------------------------- */
let currentDate = new Date().getFullYear();
const currentYear = document.querySelector("#year");
currentYear.innerHTML = currentDate;
/* ---------------------------- Get Current Year ---------------------------- */
