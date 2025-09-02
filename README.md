# Lista de Compras - CRUD com TypeScript e MongoDB

## Descrição do Projeto
Este projeto é um **CRUD (Create, Read, Update, Delete)** de uma lista de compras, desenvolvido em **TypeScript** com **Node.js**, **Express** e **MongoDB**.  
Permite adicionar, editar e excluir produtos, exibindo-os em uma interface web simples e responsiva.

O projeto foi desenvolvido como atividade da disciplina **Desenvolvimento Web III**.

---

## Funcionalidades

- Adicionar produtos com nome e valor.
- Editar produtos existentes.
- Excluir produtos da lista.

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **TypeScript**: Superconjunto de JavaScript com tipagem estática.
- **Express**: Framework minimalista para criação de APIs REST.
- **MongoDB + Mongoose**: Banco de dados NoSQL e ORM para manipulação de dados.
- **HTML / CSS / JavaScript**: Frontend da aplicação.

Dependências de desenvolvimento:
- `@types/express`, `@types/node`, `@types/mongoose`, `@types/cors`, `ts-node`, `typescript`.

---

## Estrutura de Diretórios
```
lista-de-compras/
│
├─ src/
│ ├─ index.ts # Arquivo principal do servidor
│ ├─ models/
│ │ └─ Produto.ts # Modelo do produto no MongoDB
│ └─ routes/
│   └─ produtoRoutes.ts # Rotas CRUD
│
├─ public/
│ ├─ index.html # Front-end
│ ├─ style.css # Estilos da aplicação
│ └─ script.js # Lógica de interação com o backend
│
├─ package.json
└─ tsconfig.json
```

---

## Configuração do Projeto

### 1. Inicializando o Projeto
Crie a pasta do projeto e execute os seguintes comandos:

```bash
git clone https://github.com/GabrielFrois/lista-de-compras.git
cd lista-de-compras
npm init -y
```

### Instale as dependências:

```bash
npm install express mongoose cors body-parser
```

### Instale as dependências de desenvolvimento:

```bash
npm install --save-dev typescript ts-node @types/cors @types/express @types/node @types/mongoose
```

### Inicialize o TypeScript:

```bash
npx tsc --init
```

### 2. Configurando o MongoDB
Você pode usar o **MongoDB Compass** ou **MongoDB Atlas** para criar o banco de dados.  

Sugestão de configuração local:  
- Nome do banco de dados: `shopping-list`
- Nome da coleção: `shoppingitems`

No `arquivo src/index.ts`, a conexão está definida assim:

```typescript
mongoose.connect("mongodb://127.0.0.1:27017/shopping-list")
```

### 3. Estrutura das Rotas
- **POST /lista**: Cria um novo produto.
- **GET /lista**: Retorna todos os produtos.
- **PUT /lista/:id**: Atualiza um produto pelo ID.
- **DELETE /lista/:id**: Remove um produto pelo ID.

### 4. Rodando o Projeto
No terminal, execute:

```bash
npm run dev
```

O servidor estará disponível em:  

```
http://localhost:3000
```

Abra o navegador e acesse o frontend pelo mesmo endereço.

---

## Observações

- Certifique-se de que o **MongoDB** esteja rodando antes de iniciar o servidor.
- O frontend está localizado na pasta `public` e é servido pelo **Express**.
- A interface é simples e focada na prática do **CRUD** utilizando **TypeScript** e **MongoDB**.
