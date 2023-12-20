const input = document.querySelector("#input");
const submit = document.querySelector("button");
const clear = document.querySelector("#clear");


submit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = input.value;
  const itemsBox = document.querySelector("ol");
  const item = document.createElement("li");
  const text = document.createElement("p");
  const del = document.createElement("button");

  text.textContent = data;
  del.textContent = "Delete";
  input.value = "";

  item.append(text, del);
  itemsBox.append(item);
  item.addEventListener('click', () => {
    item.classList.toggle('done')
  })
  

  del.addEventListener("click", () => {
    item.remove();
  });
});

clear.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
});
