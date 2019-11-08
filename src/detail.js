import { cars } from "./cars/carsarray";
const carHeading = document.querySelector(".details_container__heading");
const pictureDiv = document.querySelector(".content__card__image");
const captionHeading = document.querySelector(
  ".details_container__text__caption"
);
const carHistory = document.querySelector(".details_container__text_history");
function getCar() {
  const car = cars[3];
  carHeading.innerHTML = car.name;
  pictureDiv.src = car.img;
  captionHeading.innerHTML = car.description;
  carHistory.innerHTML = car.history;
  console.log(pictureDiv);
}
getCar();
