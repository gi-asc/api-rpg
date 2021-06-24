const Sequelize = require('sequelize');
const instancia = require('../../config/connection');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    key: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
            model: require('./classes'),
            key: 'id'
        }
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'caracteristicas',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}


module.exports = instancia.define('caracteristicas', colunas, opcoes)