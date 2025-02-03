const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexion.js');

const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    carrera:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status:{
        type:DataTypes.STRING(10),
        allowNull:true,
        defaultValue:'false'
    }
},{timestamps:true});

module.exports = Usuarios;