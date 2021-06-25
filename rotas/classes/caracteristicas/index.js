const router = require('express').Router({mergeParams : true});
const modelo = require('../../../models/tabelas/caracteristicas');
const instancia = require('../../../models/factory/caracteristica');
const actions = require('../../../actions');

const verificaClasse = async (req, res, proximo)=>{

    try{
       const id = req.params.key;
       const rota = '/'+id
       await actions.buscaId(rota, modelo);
       req.key = id;
       proximo()
    }catch(erro){
    proximo(erro)
    }
    }
    

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo, instancia);
actions.headFunc(router, modelo, instancia);
actions.modifica(router, modelo);
actions.deletar(router, modelo);
actions.permiteOperar(router);


module.exports = router;
