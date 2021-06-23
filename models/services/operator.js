module.exports = {
    listar (Modelo) {
        return Modelo.findAll({raw : true})
    },

    inserir(dados, Modelo) {
        return Modelo.create(dados);
    },

    async buscar(id, Modelo){
        const encontrado = await Modelo.findOne({
            where : {
                id : id
            }
        })
        if(!encontrado){
            throw new NaoEncontrado();
        }

        return encontrado;
    },

    async atualizar(id, dados, Modelo){
  return Modelo.update(dados,
    {
        where: {
            id : id
        }
    })
    },

    async remover(id, Modelo){
        return Modelo.destroy({
            where : {
                id : id
            }
        })
    }
}