const operator = require('./models/services/operator');
module.exports = {
    list(router, modelo){
    router.get('/', async (req, res)=>{
    const listagem = await operator.listar(modelo);
    res.send(listagem);
    })},
    
    insere(router, modelo, instancia){
        router.post('/', async (req, res)=>{
        const dados = req.body;
        const novo = new instancia(dados).gerar();
        await operator.inserir(dados, modelo);
    
     res.send(JSON.stringify({
         "Mensagem" : "Inserido com sucesso",
         "Dados" : novo
     }));
    })
    },
    
    buscaId(router, modelo){
    router.get('/:id', async (req, res)=>{
    const encontrado = await operator.buscar(req.params.id, modelo);
    
    res.send(JSON.stringify(encontrado))
    })},
    
    modifica(router, modelo)
   { router.put('/:id', async (req, res)=>{
        await operator.atualizar(req.params.id, req.body, modelo);
        res.send("dados atualizados!");
    })},
    
    deletar(router, modelo){
    router.delete('/:id', async (req, res)=>{
        await operator.remover(req.params.id, modelo);
        res.send("dados removidos")
    })}
}