const form = document.querySelector(".form"); // Seleciona o formulário

function formEvent(event) {
  event.preventDefault();

  function calculate() {
    // Pega o valor digitado e converte para número
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = altura ** 2 / peso;
    return resultado;
  }
  const resultado = calculate()
  if (resultado > 0){
console.log('ok')
  }
}

form.addEventListener("submit", formEvent);