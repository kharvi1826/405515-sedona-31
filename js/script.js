const searchButton = document.querySelector(".search-button2");
let  popup = document.querySelector(".booking");
const form = document.querySelector(".booking-hotel");
const data = form.querySelector(".date-field");

popup.classList.add("popup-close");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-show");
  popup.classList.toggle("popup-close");
});

form.addEventListener("submit", function (evt) {
  if (!data.value || !people.value) {
    evt.preventDefault();
    popup.classList.add("error");
  }
});