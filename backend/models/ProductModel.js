import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('products', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        //wajib diisi untuk uuid karena tidak boleh kosong
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        //wajib diisi untuk uuid karena tidak boleh kosong
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 10]
        }
    },
    price:{
        type: DataTypes.INTEGER,
        //wajib diisi untuk uuid karena tidak boleh kosong
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        //wajib diisi untuk uuid karena tidak boleh kosong
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    
}, {
    freezeTableName: true
});

//buat relasi dari data id
Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey: 'userId'})

export default Products;