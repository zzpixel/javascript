let alertsDisabled = false
let level = 0

document.querySelector(".the-button").addEventListener("click", () => {
    level++
    displayLevel()
})

document.querySelector(".the-button").addEventListener("mouseover", () => {
    if (!alertsDisabled) {
        alert("Don't touch the button, click it!")
    }
})

document.querySelector(".disable-alerts").addEventListener("click", () => {
    alertsDisabled = true
})

function displayLevel() {
    document.querySelector(".level").innerHTML = `Level ${level}`
}

function levelOne() {
    
}
