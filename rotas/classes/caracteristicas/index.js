const router = require('express').Router({mergeParams : true});
const modelo = require('../../../models/tabelas/caracteristicas');
const instancia = require('../../../models/factory/caracteristica');
const actions = require('../../../actions');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo);
actions.deletar(router, modelo);

module.exports = router;
