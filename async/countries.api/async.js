const countriesContainer = document.querySelector(".countries")

function renderCountry(data) {
    const html = `
            <article>
                <img src="${data.flags.png}" class="country-img"/>
                <div class="country-info">
                    <h2 class="country-name">${data.name}</h2>
                    <h3 class="country-region">${data.region}</h3>
                    <p class="country-row">${data.population}</p>
                    <p class="country-row">${data.languages[0].name}</p>
                    <p class="country-row">${data.currencies[0].name}</p>
                </div>
            </article>`;
    
    countriesContainer.insertAdjacentHTML("beforeend", html)
}

function getCountryDataAndNeighbor(country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);
    
    renderCountry(data);

    
    const neighbor = data.borders
    if (!neighbor) {
    return;
    }
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', () => {
    const ndata = JSON.parse(request2.responseText);
    renderCountry(ndata);

    });
    
});

}

getCountryDataAndNeighbor("israel")