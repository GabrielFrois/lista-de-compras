import mongoose, {Schema, Document} from "mongoose";

// Interface que define como será a estrutura de uma Compra no TypeScript
export interface IProduto extends Document {
    produto:string;
    valor:number;
}

// Definido o esquema (estrutura do documento no MongoDB)
const ProdutoSchema:Schema = new Schema({
    produto: { type:String, required:true },
    valor: {type:Number, required:true },
});

// Exportando o modelo para ser usado no CRUD
export default mongoose.model<IProduto>("shoppingitems", ProdutoSchema);