 
const modelos = [
    require('../models/tabelas/classes'),
    require('../models/tabelas/racas'),
    require('../models/tabelas/equipamento'),
];

async function criarTabela() {
    modelos.forEach((element) => {
    element
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)    
    });
}

criarTabela();