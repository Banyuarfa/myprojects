const number = document.querySelectorAll("#number");
const operator = document.querySelectorAll("#operator");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const display = document.querySelector("h1");
let solve = "";
let single;

ac.addEventListener("click", () => {
  solve = "";
  display.textContent = solve;
});

del.addEventListener('click', () => {
  solve = solve.slice(0,-1)
  display.textContent = solve;
})

number.forEach((button) => {
  button.addEventListener("click", () => {
    solve += button.textContent;
    display.textContent = solve;
    single = false;
  });
});

operator.forEach((button) => {
  button.addEventListener("click", () => {
    solve += button.textContent;
    display.textContent = solve;
    single = true;
  });
});

equal.addEventListener("click", () => {
  let x = eval(solve);
  display.textContent = x;
  solve = ''
});