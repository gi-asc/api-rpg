const operator = require('./models/services/operator');
module.exports = {
    list(router, modelo){
        try
{    router.get('/', async (req, res)=>{
    const listagem = await operator.listar(modelo);
    res.send(listagem);})
    }catch(erro){
res.send(JSON.stringify(erro));
    }
    },
    
    insere(router, modelo, instancia){
try{        router.post('/', async (req, res)=>{
        const dados = req.body;
        const novo = await new instancia(dados);
        await operator.inserir(dados, modelo);
    
     res.send(JSON.stringify({
         "Mensagem" : "Inserido com sucesso",
         "Dados" : novo
     }));
    })}
    catch(erro){
        res.send(JSON.stringify(erro))
    }
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