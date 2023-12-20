// sidebar button
const toggle = document.body.querySelector("#icon");

toggle.addEventListener("click", () => {
  const sidebar = document.body.querySelector(".sidebar");
  sidebar.classList.toggle("close");
});
// sidebar button

// card-1 dropdown button
const cardOneButton = document.body.querySelector(".card-1-dropdown-button");

cardOneButton.addEventListener("click", () => {
  const cardOneDropdown = document.querySelector(".card-1-dropdown");
  const up = document.querySelector("#up");
  const down = document.querySelector("#down");
});
// card-1 dropdown button
