const NaoEncontrado = require('./models/erros/NaoEncontrado');
const operator = require('./models/services/operator');
const Serializador = require('./models/services/serializador').Serializador;

module.exports = {
    list(router, modelo){
        try
{    router.get('/', async (req, res)=>{
    
    const listagem = await operator.listar(modelo);
    res.status(200)
    const serializador = new Serializador(res.getHeader('Content-Type'));
    res.send(JSON.stringify(serializador.serializar(listagem)));})
    }catch(erro){
throw new NaoEncontrado();
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
            res.status(201)
            const serializador = new Serializador(res.getHeader('Content-Type'));
            res.send(JSON.stringify(serializador.serializar(novo)))
        }catch(erro){
            throw new NaoEncontrado();
                }
        })
    },
    
    buscaId(router, modelo){
        try{
    router.get('/:id', async (req, res)=>{
        
    const encontrado = await operator.buscar(req.params.id, modelo);
    res.status(200);
    const serializador = new Serializador(res.getHeader('Content-Type'));
    res.send(JSON.stringify(serializador.serializar(encontrado)))})}
    catch(erro){
        throw new NaoEncontrado();
            }
    },
    
    modifica(router, modelo, proximo)
   {
    try   
    {router.put('/:id', async (req, res, )=>{
        await operator.atualizar(req.params.id, req.body, modelo);
        res.status(204);
        res.send("dados atualizados!");
        res.end();
    })}catch(erro){
        proximo(erro)
    }
},
    
    deletar(router, modelo){
        try
   { router.delete('/:id', async (req, res)=>{
        await operator.remover(req.params.id, modelo);
        res.send("dados removidos")
    })}catch(erro){
        proximo(erro)
    }
}
}