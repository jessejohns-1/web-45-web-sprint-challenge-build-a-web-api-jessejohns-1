const express = require('express');
const Actions = require('./actions-model')
const router = express.Router();

router.get('/', (req, res, next)=>{
    Actions.get()
    .then(actions => {
        console.log(actions)
        res.status(200).json(actions)
    })
    .catch(next)
})

router.get('/:id', ( req, res)=>{
    console.log('hello')
})

router.post('/',( req, res)=>{
    console.log('hello')
})

router.put('/:id',( req, res)=>{
    console.log('hello')
})

router.delete('/:id',( req, res)=>{
    console.log('hello')
})





module.exports = router