const display = document.querySelector("h1");
const tambah = document.querySelector("#tambah");
const kurang = document.querySelector("#kurang");
const reset = document.querySelector("#reset");
let count = 0;

tambah.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

kurang.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
