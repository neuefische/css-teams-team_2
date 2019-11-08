import { cars } from "./cars/carsarray";

const showContentButton = document.querySelector("[data-show-cars]");
const contentDirection = document.querySelector(".content");

function createCard(car) {
  const newCar = document.createElement("div");
  newCar.className = "content__card";
  newCar.innerHTML = `<div class="content__card__imgcontainer">
  <img
    src=${car.img}
    alt=${car.alt}
    class="content__card__image"
  />
</div>
<div class="content__card__text">
  <h3>${car.name}</h3>
  <p>${car.description}</p>
  <a href="./pages/detail.html">
    <button class="content__card__button">Read more</button>
  </a>
</div>`;
  contentDirection.append(newCar);
}
cars.forEach(createCard);
