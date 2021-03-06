const {DataTypes} = require("sequelize");
const db = require("../connection");

const scout = db.sequelize.define("scouts",{
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
        school:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        background: {
            type: DataTypes.STRING,
            allowNull: true
          },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "scouts"
 });

 exports.model = scout;