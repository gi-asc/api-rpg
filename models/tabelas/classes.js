const Sequelize = require('sequelize');
const instancia = require('../../config/connection');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dadoVida: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        
    },
    proeficiencias: {
        type: Sequelize.JSON,
        allowNull: false
    },
    caracteristicas: {
        type: Sequelize.JSON,
        allowNull: false
    },
    pericias: {
        type: Sequelize.JSON,
        allowNull: false
    },
    equipamentoBase: {
        type: Sequelize.JSON,
        allowNull: false
    },
    bonusProef: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'classes',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}


module.exports = instancia.define('classes', colunas, opcoes)