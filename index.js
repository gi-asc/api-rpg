const express = require('express');
const app = express();
const equipamento = require('./rotas/equipamentos');
const raca = require('./models/factory/raca');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/api/equipamentos', equipamento);

app.listen(3001, ()=>console.log("Tudo ocorrendo bem"));