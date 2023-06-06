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

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Admin" && password === "123456") {
      window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }
  
  var carouselIndex = 0;
  var carouselImages = document.querySelector(".carousel").getElementsByTagName("img");
  
  
  