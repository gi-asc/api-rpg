const express = require('express');
const app = express();
const equipamento = require('./rotas/equipamentos');
const classes = require('./rotas/classes');
const racas = require('./rotas/racas');;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
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