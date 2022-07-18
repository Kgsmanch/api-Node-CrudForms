const app = require('../config/server'); 
const Controller = require('../controllers/Address.controller')

app.get('/addresses', async (request, result) => {
    const response = await Controller.getAll(request, result).then((result) => {
    return result
    }) 
    return response
})

app.get('/addresses/:id', Controller.validateId, async (request, result) => {
    const response = await Controller.getOne(request, result).then((result) => {
        return result
    })
    return response
})   

app.delete('/addresses/:id', Controller.validateId, async (request, result) => {
    const response = await Controller.destroy(request, result).then((result)=> {
        return result
    })
    return response
})

app.post('/addresses', Controller.validateEntry, async (request, result) => {
    const response = await Controller.create(request, result).then((result) => {
        return result
    })
    return response
})

app.put('/addresses/:id', Controller.validateEntry ,Controller.validateId, async (request, result) => {
    const response = await Controller.update(request, result).then((result) => {
        return result
    })
    return response
})
