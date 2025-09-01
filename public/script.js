const API_URL = "http://localhost:3000/lista";
const form = document.getElementById("form-produto");
const lista = document.getElementById("lista-produtos");

// Função para carregar produtos
async function carregarProdutos(){
    const resp = await fetch(API_URL);
    const produtos = await resp.json();

    lista.innerHTML = ""; // Limpa lista
    produtos.forEach(produto => {
        const li = document.createElement("li");
        li.textContent = `${produto.produto} - ${produto.valor}`;
        lista.appendChild(li);
    });
}

// Função para cadastrar produtos
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const novoProduto = {
        produto: document.getElementById("produto").ariaValueMax,
        valor: document.getElementById("valor").value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto)
    });

    form.reset();
    carregarProdutos();
});

// Carrega a lista ao abrir a página
carregarProdutos();