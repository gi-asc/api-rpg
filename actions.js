const operator = require('./models/services/operator');
module.exports = {
    list(router, modelo){
        try
{    router.get('/', async (req, res)=>{
    const listagem = await operator.listar(modelo);
    res.send(listagem);})
    }catch(erro){
res.send(JSON.stringify(erro))
    }
    },
    
   insere(router, modelo, instancia){
        router.post('/',  async (req, res) => {
            try{
            const dados = await req.body;
            let dadosCompleto = dados;
            const key = await req.params.key;

            if(key !== null){
                dadosCompleto = await Object.assign({}, dados, {key : key})
            }
            const novo = new instancia(dadosCompleto);
            await novo.gerar();
            await operator.inserir(dadosCompleto, modelo)
            res.send(JSON.stringify(novo))
        }catch(erro){
            console.log(erro)
        }
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