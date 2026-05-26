function calcularDesconto(){


let valorOriginal = document.getElementById("valor").value;
let desconto = document.getElementById("valor").value;

let valorDesconto = (valorOriginal * desconto) / 100;
let valorFinal = valorOriginal - valorDesconto;

document.getElementById("resultado"). textContent = "Valor final:" + valorFinal;

}

function calcularIMC(){


let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;


let valorImc = peso /(altura * altura);


if (valorImc < 18.50)
   classificacao = "Abaixo do Peso";
else
   if (valorImc >= 18.50 && valorImc <= 24.90)
      classificacao = "Peso Normal";
   
        else

   if (valorImc >= 25 && valorImc <= 29.99)
      classificacao = "Sobrepeso";

      if (valorImc > 30.00){
        classificacao = "Obeso";
      }
   


document.getElementById("valorImc"). textContent = "IMC:" + valorImc.toFixed(2);

document.getElementById("classificacao"). textContent = "Classificação:" + classificacao;

}

function calculateDiscount(price, discount) {
    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;
    return finalPrice;
}

const price = 100;
const discount = 10;
console.log("Preço final com desconto: " + calculateDiscount(price, discount));

const matrizGastos = [
   ["Alimentação",0],
   ["Transporte",0],
   ["Lazer",0],
   ["Total",0],
   
]

const atualizaValorCategoria = (categoria,valor) => categoria[1] = somaValor(categoria[1],valor);
const obterElemento = (id) => document.getElementById(id);
const obterValor = () => parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value;
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const obeterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item [0] === nomeCategoria);

const atualizarInterface = () => {

   matrizGastos.forEach(([nome, valor]) => {
      const elemento = obterElemento(nome);
      elemento.textContent = `${nome} : R$ ${valor}`
   })
}

const limparCampos = () => obterElemento("valor").value = '';

function adicionarGasto()
{

   const valorInformado = obterValor();
   const categoriaInformada = obterCategoriaInformada();

   if(valorNegativo(valorInformado)){
      alert ("Valor inválido");
      return;
   }

const categoria = obeterCategoria(matrizGastos, categoriaInformada);

atualizaValorCategoria(categoria, valorInformado);

const total = obeterCategoria (matrizGastos, "Total");

atualizaValorCategoria(categoria, valorInformado);
atualizaValorCategoria(total, valorInformado);
atualizarInterface();
limparCampos();   
}

function calculateMovieDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + "h " + remainingMinutes + "m";
}

const movieDuration = calculateMovieDuration(125);
console.log("Duração do filme: " + movieDuration);
    