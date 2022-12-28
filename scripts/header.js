const button_hamburguer = document.getElementById("content_2");
const line = document.createElement("div");
line.classList.add("line");

button_hamburguer.insertAdjacentElement("afterbegin", line);

button_hamburguer.addEventListener("click", () => {
    button_hamburguer.classList.toggle("active");
})
