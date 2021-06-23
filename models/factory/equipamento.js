const Equipamento = require("../entities/equipamento");

class FactoryEquipamento {
    constructor({nome, tipo, peso, preco}){
        this.nome = nome;
        this.tipo = tipo;
        this.peso = peso;
        this.preco = preco;
    }

    gerarEquipamento(){
        if(typeof this.peso !== "number" || typeof this.preco !== "number" || typeof this.tipo !== "string" ){
            throw new Error("Propriedades inválidas");
        }
        const nome = this.nome;
        const tipo = this.tipo; 
        const preco = this.preco; 
        const peso = this.peso; 
        return new Equipamento({"nome": nome, "tipo" : tipo, "preco" : preco, "peso" : peso});
    }
}

module.exports = FactoryEquipamento;