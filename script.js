// Levantamento de requisitos
// Carne - 400 ml gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + de 6 horas 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
  console.log("Calculando...")
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  console.log(qtdTotalCarne)
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}
