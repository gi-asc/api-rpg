class Classe {
    constructor({nome, dadoVida, descricao, proeficiencias, bonusProef, caracteristicas, pericias, equipamentoBasico}){
        this.nome = nome;
        this.dadoVida = dadoVida;
        this.descricao = descricao;
        this.proeficiencias = proeficiencias;
        this.caracteristicas = caracteristicas;
        this.pericias = pericias;
        this.equipamentoBasico = equipamentoBasico;
        this.bonusProef = bonusProef;
    }
}

class ClasseConjuradora extends Classe {
    constructor(nome, dadoVida, descricao, proeficiencias = {}, bonusProef, caracteristicas = {}, pericias = {}, equipamentoBasico = {}, kitConjurador){
        super(nome, dadoVida, descricao, proeficiencias = {}, bonusProef, caracteristicas = {}, pericias = {}, equipamentoBasico = {})
        this.kitConjurador = kitConjurador;
    }
}

module.exports = {
    Classe : Classe,
    ClasseConjuradora : ClasseConjuradora
}