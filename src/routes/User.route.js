const app = require('../config/server')

app.get('/users', (request, result) => {
    result.send('teste em get user')
})

app.get('/users/:id', (request, result) => {
    const data = request.params.id
    result.status(200).json(data)
})

app.delete('/users/:id', (request, result) => {
    const data = request.params.id
    result.status(200).json(data)
})

app.post('/users', (request, result) => {
    result.send(request.body)
})

app.put('/users/:id', (request, result) => {
    const data = request.params.id
    result.status(200).send(data)
})

