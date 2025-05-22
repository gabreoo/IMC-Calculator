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
  const imcChecker = [
    "desnutrição",
    "magreza",
    "normal",
    "sobrepeso",
    "obesidade",
  ];
  let = classificacaoIndex;
  if (resultado >= 0 && resultado < 17) {
    classificacaoIndex = 0;
  } else if (resultado >= 17 && resultado < 18.5) {
    classificacaoIndex = 1;
  } else if (resultado >= 18.5 && resultado < 25) {
    classificacaoIndex = 2;
  } else if (resultado >= 25 && resultado < 30) {
    classificacaoIndex = 3;
  } else if (resultado >= 30) {
    classificacaoIndex = 4;
  } else {
    alert("Erro: verifique os números digitados.");
  }
}

// ao clicar em enviar ele vai disparar toda a função de formEvent
form.addEventListener("submit", formEvent);
