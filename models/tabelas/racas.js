const Sequelize = require('sequelize');
const instancia = require('../../config/connection');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bonus: {
        type: Sequelize.JSON,
        allowNull: false
    },
    idioma: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    tendencia: {
        type: Sequelize.ENUM("CAOTICO BOM", "NEUTRO BOM", "LEAL BOM", "CAOTICO NEUTRO", "NEUTRO", "LEAL NEUTRO", "CAOTICO MAU", "LEAL MAU", "NEUTRO MAU"),
        allowNull: false
    },
    tamanho: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    deslocamento: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'racas',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}


module.exports = instancia.define('racas', colunas, opcoes)