// Objeto literal

const pessoa = { nome: "Matheus", idade:20}

//Classe

class Veiculo {

    //construtor
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        //Atributo Privado
        this._ligado = false;
    }

    //Metodos
    ligar(){
        this._ligado = true;
        console.log("O veiculo está ligado");
    }

    desligar(){
        this._ligado = false;
        console.log("O veiculo está desligado");
    }

    //GET
    get ligado(){
        return this._ligado;
    }

}

const VeiculoNovo = new Veiculo("Honda", "Civic", 2025);

console.log(VeiculoNovo);
VeiculoNovo.ligar();
VeiculoNovo.desligar();
console.log("Ocarro esta ligado ? ", VeiculoNovo.ligado)



//Herança
class Moto extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, modelo, ano);
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, numeroPortas){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }
}

const motoNova = new Moto ("Honda", "MH", 2025);
console.log(motoNova);
motoNova.ligar();

const carro = new Carro("Honda", "Civic", 2025, 4);