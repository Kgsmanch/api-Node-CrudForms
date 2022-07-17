const app = require('../config/server'); 
const Controller = require('../controllers/User.controller')

app.post('/users', async (request, result) => {
    const response = await Controller.create(request).then((response) => {
        return response
    })
    if (!response) {
        console.log('No result from controller')
    } else {
        result.send(response)
    }
})


// app.post('/addresses', async (request, result) => {
//     response = await Controller.create(request).then((response) => {
//         return response
//     })
    
//     result.send(response);
// })