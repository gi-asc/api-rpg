const Raca = require('../entities/raca');
const tendencias = require('./tendencias');

class FactoryRaca {
    constructor(nome, bonus = {forca, destreza, inteligencia, sabedoria, constituicao, carisma}, tendencia, tamanho, listaProeficiencias = {}, idioma, deslocamento, descricao){
        this.nome = nome;
        this.bonus = bonus;
        this.idioma = idioma;
        this.listaProeficiencias = listaProeficiencias;
        this.tendencia = tendencia;
        this.tamanho = tamanho;
        this.deslocamento = deslocamento;
        this.descricao = descricao;
    }

    gerar(){
        Array.from(this.bonus).forEach(element => {
            if(typeof element !== "integer"){
                throw new Error("Dados Inválidos");
            }
        });

        this.listaProeficiencias.forEach(element =>{
            if(typeof element !== "string"){
                throw new Error("Dados Inválidos");
            }
        })
        if(typeof this.idioma !== "string" || tendencias.indexOf(this.tendencia) === -1 || typeof this.descricao !== "string" || typeof this.deslocamento !== "number" || typeof this.tamanho !== "number" || typeof this.nome !== "string"){
            throw new Error("Dados Inválidos");
        }
    return new Raca(this.nome, this.bonus, this.tendencia, this.tamanho, this.listaProeficiencias, this.idioma, this.deslocamento, this.descricao);
    }
}

module.exports = FactoryRaca;