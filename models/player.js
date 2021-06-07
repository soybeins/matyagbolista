const {DataTypes} = require("sequelize");
const db = require("../connection");

const player = db.sequelize.define("players",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
        },
        uuid:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
          },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
          },
        position: {
            type: DataTypes.STRING,
            allowNull: false
          },
        height: {
            type: DataTypes.STRING,
            allowNull: false
          },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
        address: {
            type: DataTypes.STRING,
            allowNull: false
          }
    }, {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "players"
 });

exports.model = player;
