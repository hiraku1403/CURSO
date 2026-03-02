 let numeroSecreto = Math.floor(Math.random() * 100) + 1;
 let tentativas = 0;

    function verificarPalpite() {
        const input = document.getElementById('palpiteUsuario');
        const msg = document.getElementById('mensagem');
        const palpite = Number(input.value);
        tentativas++;

        if (!palpite || palpite < 1 || palpite > 100) {
            msg.textContent = "Por favor, digite um número entre 1 e 100.";
            msg.style.color = "red";
            return;
        }

        if (palpite === numeroSecreto) {
            msg.textContent = `Parabéns! Você acertou em ${tentativas} tentativas!`;
            msg.style.color = "green";
            finalizarJogo();
        } else if (palpite > numeroSecreto) {
            msg.textContent = "Muito alto! Tente um número menor.";
            msg.style.color = "orange";
        } else {
            msg.textContent = "Muito baixo! Tente um número maior.";
            msg.style.color = "orange";
        }
        
        input.value = '';
        input.focus();
    }

    function finalizarJogo() {
        document.getElementById('btnReiniciar').style.display = 'inline-block';
        document.querySelector('button[onclick="verificarPalpite()"]').disabled = true;
    }

    function reiniciarJogo() {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        document.getElementById('mensagem').textContent = '';
        document.getElementById('btnReiniciar').style.display = 'none';
        document.querySelector('button[onclick="verificarPalpite()"]').disabled = false;
        document.getElementById('palpiteUsuario').value = '';
    }