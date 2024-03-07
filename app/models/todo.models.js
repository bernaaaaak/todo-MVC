"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:./db.sqlite3') //let sequelize know about db and its path


// POSTGRESQL CONNECTION:
// $ npm i pg pg-hstore
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// const sequelize = new Sequelize('postgres://userCH15:12345678@localhost:5432/testCH15')

// MYSQL CONNECTION:
// $ npm i mysql2 
// $ npm i mariadb // Alternative
// const sequelize = new Sequelize('mysql://user:pass@localhost:3306/dbname')


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