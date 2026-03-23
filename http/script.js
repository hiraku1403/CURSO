
const API_URL = "https://crudcrud.com/api/628e1c36c7e94d9185d3c6f65bd19f19/clientes";

const form = document.getElementById('clienteForm');
const listaClientes = document.getElementById('listaClientes');

// --- FUNÇÃO: LISTAR CLIENTES (GET) ---
async function listarClientes() {
    try {
        const response = await fetch(API_URL);
        const clientes = await response.json();
        
        listaClientes.innerHTML = ""; // Limpa a lista antes de renderizar

        clientes.forEach(cliente => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${cliente.nome}</strong> (${cliente.email})</span>
                <button class="btn-excluir" onclick="excluirCliente('${cliente._id}')">Excluir</button>
            `;
            listaClientes.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao listar clientes:", error);
    }
}

// --- FUNÇÃO: CADASTRAR CLIENTE (POST) ---
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const novoCliente = { nome, email };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoCliente) // Transforma o objeto em JSON
        });

        if (response.ok) {
            form.reset(); // Limpa os campos
            listarClientes(); // Atualiza a lista na tela
        }
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
    }
});

// --- FUNÇÃO: EXCLUIR CLIENTE (DELETE) ---
async function excluirCliente(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            listarClientes(); // Atualiza a lista após remover
        }
    } catch (error) {
        console.error("Erro ao excluir cliente:", error);
    }
}

// Inicializa a lista ao carregar a página
listarClientes();