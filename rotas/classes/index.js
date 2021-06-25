const router = require('express').Router({mergeParams:true});
const modelo = require('../../models/tabelas/classes');
const instancia = require('../../models/factory/classe');
const actions = require('../../actions');
const caracteristicas = require('./caracteristicas');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo, instancia);
actions.headFunc(router, modelo, instancia);
actions.modifica(router, modelo);
actions.deletar(router, modelo);
actions.permiteOperar(router);


router.use('/:key/caracteristicas', caracteristicas)
module.exports = router;
