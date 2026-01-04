import { createCatCard } from "./ui.js";
let catGen = false;
document.getElementById("button").addEventListener("click", () => {
  if (!catGen) {
    createCatCard();
    catGen = true;
    console.log(catGen)
  } else {
    removeCurrentCard();
    createCatCard();
  }
});

function removeCurrentCard() {
  const catCard = document.getElementById("cb");
  catCard.remove();
  console.log('removed card')
}
