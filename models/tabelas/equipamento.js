const Sequelize = require('sequelize');
const instancia = require('../../config/connection');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    peso: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'equipamentos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}


module.exports = instancia.define('equipamentos', colunas, opcoes)