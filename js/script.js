const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

window.onload = function() {
  alert("Seja bem-vindo!");
};