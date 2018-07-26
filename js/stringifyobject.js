function populateDB() {
const stringified = JSON.stringify(snackCakes)
localStorage.setItem("snackCakes", stringified)
}