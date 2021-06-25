const ValorNaoSuportado = require('../erros/ValorNaoSuportado');
const jsontoxml = require('jsontoxml');

class Serializador {
    constructor(contentType){
        this.contentType = contentType;
    }

    json (dados) {
        return JSON.stringify(dados)
    }

    xml(dados){
        let tag = this.tagSingular;

        if(Array.isArray(dados)){
            tag = this.tagPlural
        }

        return jsontoxml({[tag] : dados})
    }

    serializar (dados) {
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }

        if (this.contentType === 'application/xml') {
            return this.xml(dados);
        }

        throw new ValorNaoSuportado(this.contentType)
    }
}

module.exports = {
    Serializador : Serializador,
    formatosAceitos : ['application/json', 'application/xml'],
}