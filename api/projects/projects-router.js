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


router.get("/:id",validateID, (req, res) =>{
    res.json(req.project)
}) 

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

router.put("/:id",validateID,validateBody, (req, res, next) =>{
   const  {name, description, completed} = req
   const {id} = req.params.id
    Projects.update(id, {
    name:name,
    description:description,
    completed:completed})
    .then(()=> {
        return Projects.get(id)
    })
        .then(project =>{
            res.json(project)
        })
        .catch(next)
}) 

//Delete project by id
router.delete("/:id",validateID, async (req, res, next) =>{
    const {id} = req.params.id
    try{
        await Projects.remove(id)
        res.json(res.project)
        
    } catch (err) {
        next(err)
      }
   });

//get project by id actions
router.get("/:id/actions",validateID, (req, res) =>{
    console.log("hello")
}) 







module.exports = router