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

// Rota PUT -> Altera os dados de um produto
router.put("/:id", async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const produtoAtualizado = await Produto.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!produtoAtualizado){
            return res.status(404).json({ erro: "Produto não encontrado" });
        } 

        res.json(produtoAtualizado);
    } catch (erro: unknown){
        if (erro instanceof Error){
            res.status(400).json({ erro: erro.message });
        } else {
            res.status(400).json({ erro: String(erro) });
        }
    }
});

// Rota DELETE -> Excluir produto por ID
router.delete("/:id", async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const produtoRemovido = await Produto.findByIdAndDelete(id);

        if(!produtoRemovido){
            return res.status(404).json({ erro: "Produto não encontrado"});
        }

        res.json({ mensagem: "Produto excluído com sucesso" });
    } catch (erro:unknown){
        if(erro instanceof Error) {
            res.status(400).json({ erro: erro.message});
        } else {
            res.status(400).json({ erro: String(erro)});
        }
    }
});

export default router;