const bot = document.querySelector("#bot");
const random = ["Batu", "Gunting", "Kertas"];
const player = document.querySelector("#player");
const buttons = document.querySelectorAll("button");
const condition = document.querySelector("#kondisi");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    player.textContent = button.textContent;

    let i = Math.floor(Math.random() * 3);
    bot.textContent = random[i];

    if (bot.textContent === "Batu" && player.textContent === "Batu") {
      condition.textContent = "Seri!";
    } else if (bot.textContent === "Gunting" && player.textContent === "Batu") {
      condition.textContent = "Kamu Menang!";
    } else if (bot.textContent === "Kertas" && player.textContent === "Batu") {
      condition.textContent = "Kamu Kalah!";
    } else if (bot.textContent === "Batu" && player.textContent === "Gunting") {
      condition.textContent = "Kamu Kalah!";
    } else if (
      bot.textContent === "Gunting" &&
      player.textContent === "Gunting"
    ) {
      condition.textContent = "Seri!";
    } else if (
      bot.textContent === "Kertas" &&
      player.textContent === "Gunting"
    ) {
      condition.textContent = "Kamu Menang!";
    } else if (bot.textContent === "Batu" && player.textContent === "Kertas") {
      condition.textContent = "Kamu Menang!";
    } else if (
      bot.textContent === "Gunting" &&
      player.textContent === "Kertas"
    ) {
      condition.textContent = "Kamu Kalah!";
    } else {
      condition.textContent = "Seri!";
    }
  });
});
