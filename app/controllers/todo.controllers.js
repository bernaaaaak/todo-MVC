"use strict";

const Todo = require('../models/todo.models')

module.exports ={

    list : async (req, res) => {
        const data = await Todo.findAndCountAll()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create : async (req, res) => {
        const data = await Todo.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    },

    read : async (req, res) => {
        const data = await Todo.findByPk(req.params.id)
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        // const data = await Todo.update({ ...newData }, { ...where })
        const data = await Todo.update(req.body, { where: { id: req.params.id } })

        res.status(202).send({
            error: false,
            message: 'Updated',
            body: req.body, 
            result: data,
            new: await Todo.findByPk(req.params.id) 
        })
    },

    delete : async (req, res) => {
        const data = await Todo.destroy({ where: { id: req.params.id } })
    
        res.status(200).send({
            error: false,
            
        })
    }
}