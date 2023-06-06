const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
window.onload = function() {
  alert("Seja bem-vindo!");
};


document.getElementById("myForm").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !phone || !email || !message) {
    alert("Preencha todos os campos!");
    event.preventDefault();
  }
});

