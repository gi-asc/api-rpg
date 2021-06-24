 
const modelos = [
    require('../models/tabelas/classes'),
    require('../models/tabelas/racas'),
    require('../models/tabelas/equipamento'),
    require('../models/tabelas/proeficiencias'),
    require('../models/tabelas/caracteristicas'),
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