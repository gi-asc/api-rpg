const router = require('express').Router({mergeParams:true});
const modelo = require('../../models/tabelas/classes');
const instancia = require('../../models/factory/classe');
const actions = require('../../actions');
const caracteristicas = require('./caracteristicas');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo);
actions.deletar(router, modelo);

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

router.use('/:key/caracteristicas',verificaClasse, caracteristicas)
module.exports = router;
