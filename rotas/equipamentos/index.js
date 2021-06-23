const router = require('express').Router();
const modelo = require('../../models/tabelas/equipamento');
const instancia = require('../../models/factory/equipamento');
const operator = require('../../models/services/operator');

router.get('/', (req, res)=>{
const listagem = operator.listar(modelo);
res.send(JSON.stringify(listagem));
})

router.post('/', async (req, res)=>{
    const dados = req.body;
    const novo = new instancia(dados).gerarEquipamento();
    await operator.inserir(dados, modelo);

 res.send(JSON.stringify({
     "Mensagem" : "Inserido com sucesso",
     "Dados" : novo
 }));
})

router.get('/:id', async (req, res)=>{
const encontrado = await operator.buscar(req.params.id, modelo);

res.send(JSON.stringify(encontrado))
})

router.put('/:id', async (req, res)=>{
    await operator.atualizar(req.params.id, req.body, modelo);
    res.send("dados atualizados!");
})

router.delete('/:id', async (req, res)=>{
    await operator.remover(req.params.id, modelo);
    res.send("dados removidos");
})

module.exports = router;