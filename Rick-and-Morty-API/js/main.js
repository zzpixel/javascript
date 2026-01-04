import fetchCharacters from "./api.js";
import { renderCharacters, showLoader, hideLoader} from "./ui.js";

const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("statusSelect");
const searchBtn = document.getElementById("searchBtn");
const loadMoreBtn = document.getElementById("loadMore");

let page = 1;
let query = { name: "", status: "" };
let hasMore = true;

 async function load({ reset = false } = {}) {
   if (reset) {
    page = 1;
    hasMore = true;
}

    if (!hasMore) return;

    showLoader();

    try{
    const data = await fetchCharacters({
            page,
            name:query.name,
            name:query.status,
        });

        if(reset){
            renderCharacters(data.result, {append: false}); 
        } else {
            renderCharacters(data.result, {append: page !== 1});
        }
    }catch (error) {

    }
}