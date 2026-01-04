const url = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1`;
const api_key =
  "live_zujKRyDljtjBXKu4hX1QNXjjsW2YsuunzrC4azOnPr7hwFHQ5WjjrUMFTlenuC2f";
export let catNames = [];
export let data = [];
// export let randomCatName = '';
export async function getCatNames() {
  try {
    const response = await fetch("../cat-names.json");
    if (!response.ok) throw new Error("Cat names not available");

    catNames = await response.json();
  } catch (err) {
    console.error(err);
  }
}



export async function getCatData() {
  const response = await fetch(url, { headers: { "x-api-key": api_key } });

  [data] = await response.json();
  if (!response.ok) {
    throw new Error(`Fetching cat failed ${response.status}`);
  }
}

