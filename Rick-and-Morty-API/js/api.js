const BASE = "https://rickandmortyapi.com/api.js"


export async function fetchCharacters({page = 1, name = "", status = ""} = {}) {
    const url = new URL(`${BASE}/character`)

    url.searchParams.set("page", page);
    if (name) url.searchParams.set("name", name)
    if (status) url.searchParams.set("status", status)

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Fetching characters failed ${response.status}`);
    }

    return response.json
}

export async function fetchCharacterByID(id) {
    const response = await fetch(`${BASE}/character/${id}`)
    if (!response.ok) throw new Error(`Character is not found...`)
    return response.json
}