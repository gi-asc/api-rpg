const NaoEncontrado = require('./models/erros/NaoEncontrado');
const operator = require('./models/services/operator');
const Serializador = require('./models/services/serializador').Serializador;

module.exports = {

    permiteOperar(router){
        router.options('/:id', (req, res, proximo)=>{
            res.set('Access-Control-Allow-Methods', 'GET,PUT, POST, DELETE');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.status(200);
            res.end()
        })
    },

    list(router, modelo){
        try
{    router.get('/', async (req, res, proximo)=>{
    
    const listagem = await operator.listar(modelo);
    res.status(200)
    const serializador = new Serializador(res.getHeader('Content-Type'));
    res.send(serializador.serializar(listagem));})
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
            const model = await operator.inserir(dadosCompleto, modelo)
            const timestamps = (new Date(model.dataAtualizacao)).getTime()
            res.status(201)
            res.set('Etag', model.versao);
            res.set('Last-Modified', timestamps);
            const serializador = new Serializador(res.getHeader('Content-Type'));
            res.send(serializador.serializar(novo))
        }catch(erro){
            proximo(erro)
                }
        })
    },
    
    buscaId(router, modelo, instancia){
        try{
    router.get('/:id', async (req, res)=>{
        
    const encontrado = await operator.buscar(req.params.id, modelo);
    const obj = new instancia(encontrado);
    await obj.gerar()
    res.status(200);
               const timestamps = (new Date(obj.dataAtualizacao)).getTime()
            res.set('Etag', obj.versao);
            res.set('Last-Modified', timestamps);
    const serializador = new Serializador(res.getHeader('Content-Type'));
    res.send(serializador.serializar(obj))})}
    catch(erro){
        proximo(erro);
            }
    },
    
    headFunc(router, modelo){
        try{
            router.head('/:id', async (req, res)=>{
                
            const encontrado = await operator.buscar(req.params.id, modelo);
            const obj = new instancia(encontrado);
            await obj.gerar()
            res.status(200);
                    const timestamps = (new Date(obj.dataAtualizacao)).getTime()
                    res.set('Etag', obj.versao);
                    res.set('Last-Modified', timestamps);
            res.end()})}
            catch(erro){
                proximo(erro);
                    }
    },

    modifica(router, modelo)
   {
    try   
    {router.put('/:id', async (req, res)=>{
        const obj = await operator.atualizar(req.params.id, req.body, modelo);
        res.status(204);
        const timestamps = (new Date(obj.dataAtualizacao)).getTime()
        res.set('Etag', obj.versao);
        res.set('Last-Modified', timestamps);
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