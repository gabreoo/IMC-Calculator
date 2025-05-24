# Documentação da Calculadora de IMC

## Visão Geral
Esta é uma calculadora de Índice de Massa Corporal (IMC) que permite ao usuário inserir seu peso e altura, calculando automaticamente o IMC e fornecendo uma classificação do resultado (desnutrido, magro, normal, sobrepeso ou obeso). A interface apresenta feedback visual, destacando resultados saudáveis em verde e não saudáveis em vermelho.
O projeto foi totalmente desenvolvido por mim, desde do design a última linha de código.
## Estrutura do Projeto
- `index.html` - Página principal com o formulário de entrada
- `styles.css` - Estilos para a interface, incluindo as classes para resultados (vermelho/verde)
- `script.js` - Código JavaScript que realiza os cálculos e manipulação do DOM

## Funcionalidades
- Cálculo de IMC com base no peso e altura
- Conversão automática de altura (cm para m) quando necessário
- Classificação do resultado segundo tabela padrão de IMC
- Feedback visual por cores (verde para peso normal, vermelho para outros resultados)
- Validação de entradas para evitar cálculos com valores inválidos

## Fluxo de Funcionamento
1. Usuário insere peso e altura no formulário
2. Ao submeter o formulário, o evento é capturado
3. Os valores são validados (números positivos)
4. O IMC é calculado usando a fórmula: peso / (altura²)
5. A classificação é determinada com base no resultado
6. O resultado é exibido com formatação adequada (verde ou vermelho)

## Descrição do Código Atual
O código JavaScript atual está organizado como uma única função principal vinculada ao evento de submissão do formulário, contendo:

### Variáveis Principais
- `form` - Referência ao formulário HTML
- `peso` e `altura` - Valores convertidos dos inputs do usuário
- `resultado` - Valor calculado do IMC
- `imcChecker` - Array com as possíveis classificações do IMC
- `redResult` e `greenResult` - Elementos DOM para exibir resultados

### Função Principal
- `formEvent(event)` - Função que processa o envio do formulário:
  - Previne o comportamento padrão do formulário
  - Obtém e valida os valores de peso e altura
  - Calcula o IMC
  - Determina a classificação
  - Exibe o resultado formatado

## Como Usar
1. Abra o arquivo `index.html` no navegador
2. Insira seu peso em kg (use ponto ou vírgula para decimais)
3. Insira sua altura em metros (exemplo: 1.75) ou em centímetros (exemplo: 175)
4. Clique em "Calcular IMC"
5. Veja o resultado e sua classificação

## Pontos de Melhoria Futura
- Separar o código em funções menores com responsabilidades específicas
- Adicionar mais validações para os inputs
- Implementar armazenamento de histórico de resultados
- Melhorar a acessibilidade da interface

## Tabela de Referência do IMC
| Classificação | Valor de IMC |
|---------------|--------------|
| Desnutrido    | < 17         |
| Magro         | 17 a 18.5    |
| Normal        | 18.5 a 25    |
| Sobrepeso     | 25 a 30      |
| Obeso         | > 30         |