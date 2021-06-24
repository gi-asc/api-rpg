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
    habilidade: {
        type: Sequelize.ENUM('FORCA', 'DESTREZA', 'INTELIGENCIA', 'SABEDORIA', 'CARISMA', 'CONSTITUICAO'),
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'proeficiencias',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}


module.exports = instancia.define('proeficiencias', colunas, opcoes)