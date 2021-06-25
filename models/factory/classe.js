const Classe = require("../entities/classe").Classe;
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");

class FactoryClasse {
    constructor({nome, dadoVida, descricao, proeficiencias = {}, bonusProef, caracteristicas = {}, pericias = {}, equipamentoBasico = {}}){
        this.nome = nome;
        this.dadoVida = dadoVida;
        this.descricao = descricao;
        this.proeficiencias = proeficiencias;
        this.caracteristicas = caracteristicas;
        this.pericias = pericias;
        this.equipamentoBasico = equipamentoBasico;
        this.bonusProef = bonusProef;
    }

    gerar(){
        const nome = this.nome;
        const descricao = this.descricao;
        const dadoVida = this.dadoVida; 
        const bonus = this.bonusProef; 
        const proeficiencia = this.proeficiencias;
        const caracteristica = this.caracteristicas;
        const pericia = this.pericias;
        const equip = this.equipamentoBasico;

        if(typeof nome !== "string" || typeof descricao !== "string" || typeof bonus !== "number" || typeof dadoVida !== "number"){
            throw new ValorNaoSuportado();
        }

        return new Classe({"nome" : nome, "dadoVida" : dadoVida, "descricao" : descricao, "proeficiencias" : proeficiencia, "bonusProef" : bonus, "caracteristicas" : caracteristica, "pericias" : pericia, "equipamentoBase" : equip});
    }
}

module.exports = FactoryClasse;