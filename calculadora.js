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