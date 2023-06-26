// TODO: Crear modelo de datos de Reserva
const {sequelize, DataTypes} = require('../database'); 
const Reserva = sequelize.define('Reserva',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type:DataTypes.STRING,
    allowNull: false  
    },
    codigo:{
        type:DataTypes.INTEGER,
    allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    createdAt:true,
    deletedAt:true,
    tableName: 'reservas'
});

Reserva.sync();

module.exports = Reserva;