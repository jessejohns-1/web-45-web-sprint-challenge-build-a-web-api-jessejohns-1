const Actions = require('./actions-model');


async function ActionID(req, res, next) {
    try{
        const { id } = req.params
        const actions = await Actions.get(id)
        if(!actions){
            next({status:404, message: 'user not found'})
        } else {
            req.actions = actions
            next()
        }
    } catch (err) {
        res.status(500).json({
          message: 'action not found',
      })
}}

async function validateBody(req, res, next) {
    const { project_id, description, completed, notes } = req.body
    if (!project_id || !project_id.trim()) {
        res.status(400).json({
        message: 'missing required name field'
})
    } else if (!description || !description.trim()) {
        res.status(400).json({
        message: 'missing required description field'
})}else if(!notes || notes.trim()){
    res.status(400).json({
        message: 'Missing your notes!'
    })
}
    else {
        req.project_id = project_id.trim()
        req.description = description.trim()
        req.notes = notes.trim()
        req.completed = completed
        next()
        }

    }


module.exports = { ActionID, validateBody}