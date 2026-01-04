const grid = document.getElementById("grid");
const loader = document.getElementById("loader");
import { fetchCharacterBYId} from "./api"



export function showLoader() {
loader.classList.remove("hidden")

}

export function hideLoader() {
loader.classList.add("hidden")
}

export function renderCharacters(items, {append = false} = {}) {
    if(!append) grid.innerHTML = "";
        
    const fragment = document.createDocumentFragment();

    for(let i = 0; i <= items.length; i++) {
        const card = document.createElement('div')
        card.className = "card";

        card.innerHTML = `
        <img src="${ch.image}" alt="${ch.name}"/>
        <div class="badge">
          <div>${ch.species}</div>
          <div>${ch.status}</div>
        </div>
      </div>
        `;

        fragment.appendChild(card);
    } 

    grid.appendChild(fragment);
}