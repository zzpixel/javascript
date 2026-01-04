console.log("start")

setTimeout(() => {
    console.log("Runs after 2 secs")
}, 2000);

console.log("end")

function fetchData(callback) {
    console.log("fetching data...")

    setTimeout(() => {
        callback("Heres our data");
    }, 1500);
}

fetchData((result) => {
    console.log(result);
});