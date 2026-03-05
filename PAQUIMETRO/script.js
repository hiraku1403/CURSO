class Parquimetro {
    constructor() {
        // Tabela de valores e tempos
        this.tabela = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ];
    }

    calcularTempo(valorInserido) {
        if (valorInserido < 1.00) {
            return { erro: "Valor insuficiente" };
        }

        let tempoFinal = 0;
        let troco = 0;

        // Procura o maior tempo possível baseado no valor
        for (let item of this.tabela) {
            if (valorInserido >= item.valor) {
                tempoFinal = item.tempo;
                troco = valorInserido - item.valor;
                break; // Para no primeiro que satisfazer (o maior valor)
            }
        }

        return {
            tempo: tempoFinal,
            troco: troco.toFixed(2)
        };
    }
}

// Classe para gerenciar a interface do usuário (UI)
class InterfaceController {
    constructor() {
        this.parquimetro = new Parquimetro();
    }

    processarPagamento() {
        const input = document.getElementById('valor');
        const valor = parseFloat(input.value);
        const resultadoDiv = document.getElementById('resultado');
        const msgTempo = document.getElementById('msgTempo');
        const msgTroco = document.getElementById('msgTroco');

        const resultado = this.parquimetro.calcularTempo(valor);

        resultadoDiv.classList.remove('hidden');

        if (resultado.erro) {
            msgTempo.innerHTML = `⚠️ <strong>${resultado.erro}</strong>`;
            msgTroco.innerText = "";
            resultadoDiv.style.backgroundColor = "#ffebee";
        } else {
            msgTempo.innerHTML = `✅ Tempo de permanência: <strong>${resultado.tempo} min</strong>`;
            msgTroco.innerHTML = resultado.troco > 0 
                ? `💰 Seu troco: <strong>R$ ${resultado.troco}</strong>` 
                : "Sem troco.";
            resultadoDiv.style.backgroundColor = "#e8f5e9";
        }
    }
}

// Inicializa a aplicação
const app = new InterfaceController();