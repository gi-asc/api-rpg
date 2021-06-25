const ValorNaoSuportado = require('../erros/ValorNaoSuportado');
const jsontoxml = require('jsontoxml');

class Serializador {
    constructor(contentType){
        this.contentType = contentType
    }
    json (dados) {
        return JSON.stringify(dados)
    }

    xml(dados){
        return jsontoxml(dados)
    }

    serializar (dados) {
        dados = this.filtrar(dados);
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }

        if (this.contentType === 'application/xml') {
            return this.xml(dados);
        }

        throw new ValorNaoSuportado(this.contentType)
    }

    filtrar(dados){
        return dados;
    }
}


module.exports = {
    Serializador : Serializador,
    formatosAceitos : ['application/json', 'application/xml'],
}