let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10; // Limite de vidas

function verificarPalpite() {
    const input = document.getElementById('palpiteUsuario');
    const msg = document.getElementById('mensagem');
    const displayTentativas = document.getElementById('tentativasRestantes');
    const palpite = Number(input.value);

    // Validação básica
    if (!palpite || palpite < 1 || palpite > 100) {
        msg.textContent = "Digite um número entre 1 e 100!";
        return;
    }

    tentativasRestantes--; // Diminui um
    displayTentativas.textContent = tentativasRestantes;

    if (palpite === numeroSecreto) {
        msg.textContent = "Parabéns! Você acertou!";
        msg.style.color = "green";
        reiniciarJogo();
    } else if (tentativasRestantes === 0) {
        msg.textContent = `Game Over! O número era ${numeroSecreto}.`;
        msg.style.color = "red";
        reiniciarJogo();
    } else {
        msg.textContent = palpite > numeroSecreto ? "Muito alto!" : "Muito baixo!";
        msg.style.color = "orange";
    }

    input.value = '';
    input.focus();
}

function reiniciarJogo() {
    tentativasRestantes = 10;
    document.getElementById('tentativasRestantes').textContent = tentativasRestantes;
    const msg = document.getElementById('mensagem');
    msg.style.display = "none";
   
    // ... restante da lógica de reset
}