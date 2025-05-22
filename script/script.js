const form = document.querySelector(".form"); // Seleciona o formulário

function formEvent(event) {
  event.preventDefault(); // bloqueia o restart dos dados no formulario ao enviar

  const peso = parseFloat(
    document.getElementById("peso").value.replace(",", ".")
  ); // o value.replace troca a virgula por ponto pro js poder trabalhar no calculo
  const altura = parseFloat(document.getElementById("altura").value);

  if (altura < 3) {
    altura = altura * 100;
  }
  // Verifica se o número digitado é maior que 0 ou se realmente é um número
  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    alert("Digite um número válido");
    return;
  }

  const resultado = (altura * altura) / peso;

  const imcChecker = [
    "desnutrição",
    "magreza",
    "normal",
    "sobrepeso",
    "obesidade",
  ];

  let classificacao = "";
  
  if (resultado >= 0 && resultado < 17) {
    classificacao = imcChecker[0];
  } else if (resultado >= 17 && resultado < 18.5) {
    classificacao = imcChecker[1];
  } else if (resultado >= 18.5 && resultado < 25) {
    classificacao = imcChecker[2];
  } else if (resultado >= 25 && resultado < 30) {
    classificacao = imcChecker[3];
  } else if (resultado >= 30) {
    classificacao = imcChecker[4];
  } else {
    alert("Erro: verifique os números digitados.");
  }
}

// ao clicar em enviar ele vai disparar toda a função de formEvent
form.addEventListener("submit", formEvent);
