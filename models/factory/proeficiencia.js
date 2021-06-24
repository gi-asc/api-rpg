const Proeficiencia = require("../entities/caractetistica");
const habilidades = require('./habilidades');

class FactoryProeficiencia {
    constructor({nome, descricao, habilidade}){
        this.nome = nome;
        this.descricao = descricao;
        this.habilidade = habilidade;
    }

    gerar(){

        if(habilidades.indexOf(this.habilidade) === -1 || typeof this.nome !== "string" || this.nome === "" || typeof this.descricao != "string" || this.descricao === ""){
            throw new Error("Dados inválidos");
        }
        const nome = this.nome;
        const descricao = this.descricao;
        const habilidade = this.habilidade; 
        return new Proeficiencia({"nome" : nome, "descricao" : descricao, "habilidade" : habilidade});
    }
}

module.exports = FactoryProeficiencia;