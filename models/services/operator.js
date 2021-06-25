const NaoEncontrado = require("../erros/NaoEncontrado");

module.exports = {
    listar (Modelo) {
        return Modelo.findAll({raw : true})
    },

    inserir(dados, Modelo) {
        return Modelo.create(dados);
    },

    buscar(id, Modelo){
        const encontrado = Modelo.findOne({
            where : {
                id : id
            }
        })
        if(!encontrado){
            throw new NaoEncontrado();
        }

        return encontrado;
    },

    atualizar(id, dados, Modelo){
  return Modelo.update(dados,
    {
        where: {
            id : id
        }
    })
    },

    remover(id, Modelo){
        return Modelo.destroy({
            where : {
                id : id
            }
        })
    }
}