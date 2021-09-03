const express = require('express');
const {validateID} = require('./projects-middleware')
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
router.post("/", (req, res) =>{
    console.log("hello")
}) 

//put update projects4
router.put("/:id", (req, res) =>{
    console.log("hello")
}) 

//Delete project by id
router.delete("/:id", (req, res) =>{
    console.log("hello")
}) 

//get project by id actions
router.get("/:id/actions", (req, res) =>{
    console.log("hello")
}) 







module.exports = router