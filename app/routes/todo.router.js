"use strict";

const todo = require('../controllers/todo.controllers');

const router = require('express').Router()

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .patch(todo.update)
    .delete(todo.delete)
    
module.exports = router