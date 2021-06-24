const router = require('express').Router();
const modelo = require('../../models/tabelas/racas');
const instancia = require('../../models/factory/raca');
const actions = require('../../actions');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo);
actions.deletar(router, modelo);

module.exports = router;
