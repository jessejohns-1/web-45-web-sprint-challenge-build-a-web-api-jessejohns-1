const Project = require('./projects-model');

async function validateID(req, res, next) {
    try{
        const project = await Project.get(req.params.id)
        if(!project){
            next({status:404, message: 'user not found'})
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        res.status(500).json({
          message: 'problem finding user',
      })
}}

module.exports = { validateID }