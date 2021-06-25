const express = require('express');
const app = express();
const equipamento = require('./rotas/equipamentos');
const classes = require('./rotas/classes');
const racas = require('./rotas/racas');
const bodyParser = require('body-parser');
const NaoEncontrado = require('./models/erros/NaoEncontrado');
const formatos = require('./models/services/serializador').formatosAceitos;


app.use(bodyParser.json())

app.use((req, res, proximo)=>{
    res.set("Access-Control-Allow-Origin", "*");
    proximo();
})

app.use((req, res, proximo)=>{
    let formato = req.header('Accept');

    if(formato === '*/*'){
        formato = 'application/json';
    }

    if(formatos.indexOf(formato) === -1){
        res.status(406);
        res.end();
        return;
    }

    res.setHeader('Content-Type', formato);
    proximo();
})
app.use('/api/equipamentos', equipamento);
app.use('/api/classes', classes);
app.use('/api/racas', racas);
app.use((erro, req, res, proximo)=>{
    if(erro instanceof NaoEncontrado){
        res.status(404);
    }else{
        res.status(400);
    }
    res.send(JSON.stringify({
        message: erro.message
    }))
    })
    


app.listen(3001, ()=>console.log("Tudo ocorrendo bem"));