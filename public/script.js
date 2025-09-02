const API_URL = "http://localhost:3000/lista";

// Carregar os produtos ao abrir a página
document.addEventListener("DOMContentLoaded", carregarProdutos);

const form = document.getElementById("form-produto");
const submitButton = form.querySelector("button");
form.addEventListener("submit", salvarProduto);

// Buscar e exibir produtos
async function carregarProdutos() {
    const resposta = await fetch(API_URL);
    const produtos = await resposta.json();

    const lista = document.getElementById("produtos-lista");
    lista.innerHTML = "";

    produtos.forEach(produto => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${produto.produto} - R$${produto.valor.toFixed(2)}</td>
            <td class="acoes">
                <button onClick="editarProduto('${produto._id}', '${produto.produto}', '${produto.valor}')" class="btn-editar">Editar</button>
                <button onClick="excluirProduto('${produto._id}')" class="btn-excluir">Excluir</button>
            </td>
        `;
        lista.appendChild(tr);
    });
}

// Salvar produto (novo ou atualização)
async function salvarProduto(e) {
    e.preventDefault();

    const id = document.getElementById("produto-id").value;
    const produto = document.getElementById("produto").value;

    let valorInput = document.getElementById("valor").value;

    valorInput = valorInput.replace(",", ".");
    const valor = parseFloat(valorInput);

    const item = { produto, valor };

    if(id){
        // Alterar (PUT)
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
    } else {
        // Criar (POST)
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
    }

    form.reset();
    document.getElementById("produto-id").value ="";
    submitButton.textContent = "Adicionar Produto";
    carregarProdutos();
}

// Preencher formulário para editar produto
function editarProduto(id, produto, valor) {
    document.getElementById("produto-id").value = id; 
    document.getElementById("produto").value = produto;
    document.getElementById("valor").value = valor;
    submitButton.textContent = "Atualizar Produto";
}

// Excluir produto
async function excluirProduto(id) {
    if(confirm("Deseja realmente excluir esse produto?")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        carregarProdutos();
    }
}