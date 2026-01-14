const h1Element = document.getElementById("header")
const h2Element = document.getElementById("red")
const h3Element = document.getElementById("chColor")

h1Element.textContent = "Adiós"

h2Element.style.color = "orange"

h3Element.addEventListener("click", (event) => {
    h3Element.style.color = "brown"
})