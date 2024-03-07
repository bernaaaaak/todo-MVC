"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:./db.sqlite3') //let sequelize know about db and its path

const Todo = sequelize.define('todos', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT, //shothand using

    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})

/* ------------------------------------------------------- */
// CREATE TABLE
//sequelize.sync()
/* ------------------------------------------------------- */

//connect to db
sequelize.authenticate()//since async:
    .then(() => console.log('DB Connected'))
    .catch(() => console.log('DB NOT Connected'))

module.exports = Todo