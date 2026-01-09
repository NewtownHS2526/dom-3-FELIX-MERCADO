const prices = {
    stticker : 0.5, 
    keychain : 1.5,
    plash : 4.00,
    comic : 2.75,
    mystery : 3.25
}



let total = 0;

const sticker = document.getElementById("sticker");
const keychain = document.getElementById("keychain");
const plush = document.getElementById("plush");
const comic = document.getElementById("comic");
const mystery = document.getElementById("mystery");

const cart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const additem = (itemName, price) => {
    const p = document.createElement("p");
    p.textContent = `${itemName} - $${price.toFixed(2)}`;
    cart.appendChild(p);
    total += price;
    totalSpan.textContent = total.toFixed(2);
    
     sticker.addEventListener("click", () => {
        additem("sticke-pack", prices.sticker)
     })

    keychain.addEventListener("click", function stickerFunc() {
        return cart += 1.50;
    })

    plush.addEventListener("click", function stickerFunc() {
        return cart += 4.00;
    })

    comic.addEventListener("click", function stickerFunc() {
        return cart += 2.75;
    })

    mystery.addEventListener("click", function stickerFunc() {
        return cart += 3.25;
    })

console.log(cart);
