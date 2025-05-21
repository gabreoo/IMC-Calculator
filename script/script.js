const form = document.querySelector(".form"); // Seleciona o formulário

function formEvent(event) {
  event.preventDefault(); // bloqueia o restart dos dados no formulario ao enviar

  const peso = parseFloat(
    document.getElementById("peso").value.replace(",", ".")
  ); // o value.replace troca a virgula por ponto pro js poder trabalhar no calculo
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = (altura * altura) / peso;

  if (altura < 3) {
    altura = altura * 100;
  }
  // Verifica se o número digitado é maior que 0 ou se realmente é um número
  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    alert("Digite um número válido");
    return;
  }

  if (resultado <= 18.5) {
    console.log("1");
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    console.log("2");
  } else if (resultado >= 25.0 && resultado <= 29.9) {
    console.log("3");
  } else if (resultado >= 30.0 && resultado <= 35.99) {
    console.log("4");
  } else if (resultado >= 35.0 && resultado <= 39.99) {
    console.log("5");
  }
}

// ao clicar em enviar ele vai disparar toda a função de formEvent
form.addEventListener("submit", formEvent);
