import { Router, Request, Response } from "express";
import Produto from "../models/Produto";

const router = Router()

// Rota POST -> Criar nova compra
router.post("/", async (req:Request, res:Response) => {
    try{
        const novoProduto = new Produto(req.body);
        const produtoSalvo = await novoProduto.save(); // Salva no MongoDB
        res.status(201).json(produtoSalvo);
    } catch (erro:unknown){
        // Tratamento seguro de erro (unknown)
        if (erro instanceof Error){
            res.status(400).json({ erro: erro.message });
        } else {
            res.status(400).json({ erro: String(erro) });
        }
    }
});

// Rota GET -> Listar toda a lista de compras
router.get("/", async (_req:Request, res:Response) => {
    try {
        const produtos = await Produto.find(); // Busca todos os produtos da lista
        res.json(produtos);
    } catch (erro:unknown) {
        if (erro instanceof Error){
            res.status(500).json({ erro: erro.message });
        } else {
            res.status(500).json({ erro: String(erro) });
        }
    }
});

export default router;