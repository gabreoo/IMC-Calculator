const form = document.querySelector(".form"); // Seleciona o formulário

function formEvent(event) {
  event.preventDefault(); // bloqueia o restart dos dados no formulario ao enviar

  let peso = parseFloat(
    document.getElementById("peso").value.replace(",", ".")
  ); // O value.replace troca a virgula por ponto pro js poder trabalhar no calculo
  let altura = parseFloat(
    document.getElementById("altura").value.replace(",", ".")
  );

  if (altura > 3) {
    altura = altura / 100;
  }
  // Verifica se o número digitado é maior que 0 ou se realmente é um número
  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    alert("Digite um número válido");
    return;
  }
  // calcular IMC
  const resultado = peso / (altura * altura);
  // Armazena os dados da tabela IMC
  const imcChecker = ["desnutrido", "magro", "normal", "sobrepeso", "obeso"];

  // Se IMC for x-numero ele vai retornar o IMC de acordo com a tabela acima
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

  // puxa let estilizada com o css
  let redResult = document.querySelector(".red-result");  // puxa let estilizada com o css
  let greenResult = document.querySelector(".green-result");  // puxa let estilizada com o css

  // Limpa os anteriores
  redResult.innerHTML = "";
  greenResult.innerHTML = "";

  // declaro a mensagem a ser exibida com a let estilizada
  const ImcMessage = `Seu IMC é: ${resultado.toFixed(2)} e você está: <strong>${classificacao}</strong>`;

  if (
    classificacao === imcChecker[0] ||
    classificacao === imcChecker[1] ||
    classificacao === imcChecker[3] ||
    classificacao === imcChecker[4]
  ) {
    redResult.innerHTML = `<p>${ImcMessage}</p>`;
  } else if (classificacao === imcChecker[2]) {
    greenResult.innerHTML = `<p>${ImcMessage}</p>`;
  }
}

// ao clicar em enviar ele vai disparar toda a função de formEvent
form.addEventListener("submit", formEvent);