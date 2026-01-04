import { getCatNames } from "./api.js";
import { getCatData } from "./api.js";
import { data } from "./api.js";
import { catNames } from "./api.js";
let randomCatName = '';


export async function createCatCard() {
  await getCatData();
  await getCatNames().then(() => {
  const randomCatMath = Math.floor(Math.random() * catNames.length);
  randomCatName = catNames[randomCatMath];
  const catCard = document.createElement('div');
  catCard.className = "cat-box";
  catCard.id = "cb";
  (data.breeds.forEach(breed => {
    catCard.innerHTML = `
    <div class="cat-image" id="cimg">
    <img src="${data.url}" alt=""/>
    </div>
    <div class="cat-details">
    <span>Cat name: ${randomCatName}</span>
        <span>Breed: ${breed.name}</span>
        <span>More info: ${breed.wikipedia_url}</span>
        </div>
        `
    document.body.appendChild(catCard);
  }))
});

   
}

// createCatCard()