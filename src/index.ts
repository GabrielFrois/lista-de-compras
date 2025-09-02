import express  from "express";
import mongoose from "mongoose";
import path from "path";
import produtoRoutes from "./routes/produtoRoutes";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/shopping-list")
    .then(()=>console.log("Conectado ao MongoDB Compass"))
    .catch((erro)=>console.error("Erro ao conectar:",erro));

app.use("/lista",produtoRoutes);

// Servir front-end da pasta public
app.use(express.static(path.join(__dirname, "../public")));

// Inicia servidor
app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000");
});