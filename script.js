console.log("script running");

let totalInCents = 0;

// 5 buttons
const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

console.log(
  stickerButton,
  keychainButton,
  plushButton,
  comicButton,
  mysteryButton,
  shoppingCart,
  totalSpan
);

const updateTotal = () => {
  totalSpan.innerHTML = (totalInCents / 100).toFixed(2);
};

const addSticker = () => {
  shoppingCart.innerHTML += `<p>⭐ Sticker Pack</p>`;
  totalInCents += 50;
  updateTotal();
};
stickerButton.addEventListener("click", addSticker);

const addKeychain = () => {
  shoppingCart.innerHTML += `<p>🔑 Keychain</p>`;
  totalInCents += 150;
  updateTotal();
};
keychainButton.addEventListener("click", addKeychain);

const addPlush = () => {
  shoppingCart.innerHTML += `<p>🧸 Mini Plush</p>`;
  totalInCents += 400;
  updateTotal();
};
plushButton.addEventListener("click", addPlush);

const addComic = () => {
  shoppingCart.innerHTML += `<p>📚 Comic Book</p>`;
  totalInCents += 275;
  updateTotal();
};
comicButton.addEventListener("click", addComic);

const addMystery = () => {
  shoppingCart.innerHTML += `<p>🎁 Mystery Box</p>`;
  totalInCents += 325;
  updateTotal();
};
mysteryButton.addEventListener("click", addMystery);