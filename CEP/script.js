// Seleção dos elementos
const form = document.getElementById('cadastroForm');
const campos = ['nome', 'cep', 'logradouro', 'bairro', 'cidade', 'uf'];

// 1. Restaurar dados do Web Storage ao carregar a página
window.addEventListener('load', () => {
    campos.forEach(id => {
        const valorSalvo = localStorage.getItem(id);
        if (valorSalvo) {
            document.getElementById(id).value = valorSalvo;
        }
    });
});

// 2. Salvar dados no Web Storage automaticamente enquanto o usuário digita
form.addEventListener('input', (e) => {
    localStorage.setItem(e.target.id, e.target.value);
});

// 3. Buscar CEP via Fetch API
const campoCep = document.getElementById('cep');

campoCep.addEventListener('blur', async () => {
    const cep = campoCep.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (!data.erro) {
                // Preenche os campos e salva no localStorage
                preencherCampo('logradouro', data.logradouro);
                preencherCampo('bairro', data.bairro);
                preencherCampo('cidade', data.localidade);
                preencherCampo('uf', data.uf);
                document.getElementById('cepErro').style.display = 'none';
            } else {
                alert("CEP não encontrado.");
                document.getElementById('cepErro').style.display = 'block';
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    }
});

function preencherCampo(id, valor) {
    const campo = document.getElementById(id);
    campo.value = valor;
    localStorage.setItem(id, valor); // Sincroniza o Web Storage com a API
}

// Limpar storage ao enviar o formulário (opcional)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Dados enviados com sucesso!");
    localStorage.clear();
    form.reset();
});