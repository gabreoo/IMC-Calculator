const form = document.querySelector(".form"); // Seleciona o formulário

function formEvent(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = altura * altura / peso;

  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    alert('Digite um número válido')
    return;
  }

  // function calculate() {

  //   }
  }



form.addEventListener("submit", formEvent);
