const whiteButtonSelector = document.querySelector(".follow-me-button.white");
const blackButtonSelector = document.querySelector(".follow-me-button.black");
const numberFollowersSelector = document.querySelectorAll(".number-followers");
let whiteInitialFollowers = 0;
let blackInitialFollowers = 0;

numberFollowersSelector[0].textContent = "0";
numberFollowersSelector[2].textContent = "0";

whiteButtonSelector.addEventListener("click", e => {
  whiteInitialFollowers++;
  numberFollowersSelector[0].textContent = whiteInitialFollowers;
});

blackButtonSelector.addEventListener("click", e => {
  blackInitialFollowers++;
  numberFollowersSelector[2].textContent = blackInitialFollowers;
});
