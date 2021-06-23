const router = require('express').Router();
const modelo = require('../../models/tabelas/equipamento');
const instancia = require('../../models/factory/equipamento');
const actions = require('../../actions');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo);
actions.deletar(router, modelo);

module.exports = router;
