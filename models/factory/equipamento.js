const Equipamento = require("../entities/equipamento");
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");

class FactoryEquipamento {
    constructor({nome, tipo, peso, preco}){
        this.nome = nome;
        this.tipo = tipo;
        this.peso = peso;
        this.preco = preco;
    }

    gerar(){
        if(typeof this.peso !== "number" || typeof this.preco !== "number" || typeof this.tipo !== "string" ){
            throw new ValorNaoSuportado();
        }
        const nome = this.nome;
        const tipo = this.tipo; 
        const preco = this.preco; 
        const peso = this.peso; 
        return new Equipamento({"nome": nome, "tipo" : tipo, "preco" : preco, "peso" : peso});
    }
}

module.exports = FactoryEquipamento;