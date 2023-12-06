"use strict";

const petPromise = await fetch(
  "https://learnwebcode.github.io/pet-adoption-data/pets.json"
);
const pets = await petPromise.json();

const template = document.querySelector("#animal-card");
const warpper = document.createElement("div");

function decideAgeText(age) {
  if (!age) {
    return "less than a year old";
  }
  return age > 1 ? `${age} years old` : "1 year old";
}

pets.forEach((pet) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("h3").textContent = pet.name;
  clone.querySelector(".animal-discrption").textContent = pet.description;
  const img = clone.querySelector("img");
  img.src = pet.photo;
  clone.querySelector(".animal-type").textContent = pet.species;

  const age = new Date().getFullYear() - pet.birthYear;
  const ageText = decideAgeText(age);
  clone.querySelector(".animal-old").textContent = ageText;
  clone.querySelector(
    ".primary-btn"
  ).href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`;
  warpper.appendChild(clone);
});
document.querySelector(".animals").appendChild(warpper);
