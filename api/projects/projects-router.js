const express = require('express');
const {validateID, validateBody} = require('./projects-middleware')
const Projects = require('./projects-model')

const router = express.Router();
//Get projects1
router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(next)
})


//Get by id2
router.get("/:id",validateID, (req, res) =>{
    res.json(req.project)
}) 


//Post projects3
router.post("/",validateBody, async (req, res, next) =>{
    try{
        const newProject = await Projects.insert({
            name: req.name,
            description: req.description,
            completed: req.completed
        })
        res.status(201).json(newProject)
    }catch (error){
        next(error)
    }
}) 

//put update projects4
router.put("/:id",validateID,validateBody, (req, res) =>{
    console.log("hello")
}) 

//Delete project by id
router.delete("/:id",validateID, (req, res) =>{
    console.log("hello")
}) 

//get project by id actions
router.get("/:id/actions",validateID, (req, res) =>{
    console.log("hello")
}) 







module.exports = router