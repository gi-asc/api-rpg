const Caracteristica = require("../entities/caractetistica");
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");

class FactoryCaracteristica {
    constructor({nome, descricao, nivel, key}){
        this.nome = nome;
        this.descricao = descricao;
        this.nivel = nivel;
        this.classId = key;
    }

 gerar(){
        const nome = this.nome;
        const descricao = this.descricao;
        const nivel = this.nivel; 
        const classId = this.classId;
        if(typeof nome !== "string" || typeof descricao !== "string" || typeof nivel !== "number"){
            throw new ValorNaoSuportado();
        }
        return new Caracteristica({"nome" : nome, "descricao" : descricao, "nivel" : nivel, "key" : classId});
    }
}

module.exports = FactoryCaracteristica;