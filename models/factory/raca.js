const Raca = require('../entities/raca');
const tendencias = require('./tendencias');
const ValorNaoSuportado = require("../erros/ValorNaoSuportado");

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
                throw new ValorNaoSuportado();
            }
        });

        this.listaProeficiencias.forEach(element =>{
            if(typeof element !== "string"){
                throw new ValorNaoSuportado();
            }
        })
        if(typeof this.idioma !== "string" || tendencias.indexOf(this.tendencia) === -1 || typeof this.descricao !== "string" || typeof this.deslocamento !== "number" || typeof this.tamanho !== "number" || typeof this.nome !== "string"){
            throw new ValorNaoSuportado();
        }
        const nome = this.nome;
        const bonus = this.bonus;
        const tendencia = this.tendencia;
        const tamanho = this.tamanho;
        const listaProeficiencias = this.listaProeficiencias;
        const idioma = this.idioma;
        const deslocamento = this.deslocamento;
        const descricao = this.descricao;

    return new Raca({"nome" : nome, "bonus" : bonus, "tendencia" : tendencia, "tamanho" : tamanho, "listaProeficiencias" : listaProeficiencias, "idioma" : idioma, "deslocamento" : deslocamento, "descricao" : descricao});
    }
}

module.exports = FactoryRaca;