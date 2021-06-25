const router = require('express').Router();
const modelo = require('../../models/tabelas/equipamento');
const instancia = require('../../models/factory/equipamento');
const actions = require('../../actions');

actions.list(router, modelo);
actions.insere(router, modelo, instancia);
actions.buscaId(router, modelo, instancia);
actions.headFunc(router, modelo, instancia);
actions.modifica(router, modelo);
actions.deletar(router, modelo);
actions.permiteOperar(router);

module.exports = router;
