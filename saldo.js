class contaBancaria {
    #saldo;
    constructor(){
        this.#saldo = 0;
    }

    //Metodos
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        
        return valor <= this.#saldo;
    }

    get saldo (){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
  }

//Metodo

depositar(){

    //pegar o valor do deposito
    const valorDeposito = parseFloat(document.getElementById("valorDeposito").value)
    //fazer o deposito na conta
     this.conta.depositar(valorDeposito);
    //exibir valor atualizado
    this.mostrarSaldo(this.conta.saldo);
}

sacar(){
    const valorSaque = parseFloat(document.getElementById("valorSaque").value)
    //fazer saque
    if(this.conta.temSaldoParaSacar(valorSaque)){
        this.conta.sacar(valorSaque);
        this.mostrarSaldo(this.conta.saldo);
    }else{
        this.mostrarSaldo("insuficiente");
    }
}

mostrarSaldo(saldo){
    document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
    document.getElementById("valorDeposito").value = '';
    document.getElementById("valorSaque").value = '';
}

}

//Criar instancias

const conta = new contaBancaria ();
const caixaEletronico = new CaixaEletronico(conta);