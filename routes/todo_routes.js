const express = require('express')

const Todo = require('../models/todo')

const router = express.Router()

router.get('/todos', async (req, res, next) => {
    try {
        const todos = await Todo.find({})
        return res.status(200).json(todos)
    } catch (err) {
        next({
            status: 400,
            message: "failed to GET"
        })
    }
})

router.post('/todos', async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body)
        return res.status(200).json(todo)
    } catch (err) {
        next({
            status: 400,
            message: "failed to POST"
        })
    }
})

router.patch('/todos/:id', async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        console.log('TODO', todo)

        return res.status(200).json(todo)
    } catch (err) {
        next({
            status: 400,
            message: "failed to PATCH"
        })
    }
})

module.exports = router