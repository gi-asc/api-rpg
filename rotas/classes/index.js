const router = require('express').Router();
const modelo = require('../../models/tabelas/classes');
const instancia = require('../../models/factory/classe');
const actions = require('../../actions');
const caracteristicas = require('./caracteristicas');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo);
actions.deletar(router, modelo);

router.use('/:key/caracteristicas', caracteristicas)
module.exports = router;
