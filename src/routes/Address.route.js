const app = require('../config/server'); 
const Controller = require('../controllers/Address.controller')

app.get('/addresses', async (request, result) => {
    const response = await Controller.getAll(request).then((response) => {
        return response
    })
    if (!response) {
        return result.sendStatus(204)
    } else {
        result.status(200).send(response)
    }
})

app.get('/addresses/:id', async (request, result) => {
    const response = await Controller.getOne(request).then((response) => {
        return response
    })
    if (response === null) {
        return result.sendStatus(204);
    }
    result.status(200).send(response)
})

app.post('/addresses', Controller.validateEntry,  async (request, result) => {
    const response = await Controller.create(request).then((response) => {
        return response
    })
    if (!response) {
        result.sendStatus()
    } else {
        result.sendStatus(202)
    }
})

app.delete('/addresses/:id', async (request, result) => {
    const response = await Controller.destroy(request).then((response)=> {
        return response
    })
    if (!response) {
        result.sendStatus(204)
    } else {
        result.sendStatus(202)
    }
})

app.put('/addresses/:id', async (request, result) => {
    const response = await Controller.update(request).then((response) => {
        return response
    })
    result.status(201).send(response) 
})




app.post('/teste', Controller.validateEntry, async (request, result) => {
    result.send('Ok passou pelo controller => next')
})