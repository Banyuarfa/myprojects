setInterval(() => {
  const p = document.querySelector("p");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let clock = `${hour}:${minute}:${second}`;
  p.textContent = clock;
}, 1000);
