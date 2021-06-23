class Raca {
    constructor({nome, bonus = {forca, destreza, inteligencia, sabedoria, constituicao, carisma}, tendencia, tamanho, listaProeficiencias, idioma, deslocamento, descricao}){
        this.nome = nome;
        this.bonus = bonus;
        this.idioma = idioma;
        this.listaProeficiencias = listaProeficiencias;
        this.tendencia = tendencia;
        this.tamanho = tamanho;
        this.deslocamento = deslocamento;
        this.descricao = descricao;
    }
}

module.exports = Raca;