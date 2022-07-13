const app = require('../config/server'); 
const Controller = require('../controllers/Address.controller')

app.get('/addresses', async (request, result) => {
    response = await Controller.getAll(request).then((response) => {
        return response
    })
    result.send(response)
})
app.get('/addresses/:id', async (request, result) => {
    response = await Controller.getOne(request).then((response) => {
        return response
    })
    result.send(response)
})

app.post('/addresses', async (request, result) => {
    response = await Controller.create(request).then((response) => {
        return response
    })
    
    result.send(response);
})

app.delete('/addresses', async (request, result) => {
    response = await Controller.destroy(request).then((response)=> {
        return response
    })
    result.send('Arquivo deletado')
})

app.put('/addresses/:id', async (request, result) => {
    response = await Controller.update(request).then((response) => {
        return response
    })
    result.send(response)
})



//TESTE DIRETO OK

// const Address = require('../models/address/Address.schema')
// app.get('/testeGetOne', async(request, result) => {
//     const data = request.body
//     response = await Address.findOne({where:{id:data.id}})
//     // console.log(Object.values(data));
//     result.send(response)
// })

// app.get('/testeGet', async(request, result) => {
//     await Address.sync().then(function(){
//         return Address.findAll()
//     })
//     .then(function(answers) {
//         result.json(answers);
//      })
// })

// app.delete('/addresses/delete', async (request,result) => {
//     await Address.destroy({where: {
//         id:"5"
//     }})
//     result.send('deletado com sucesso')
// });


// app.put('/addresses/update', async (request, result) => {
// const data = request.body
// try{
//     const response = await Address.update({street_name:"mudando o teste"},{where:{id:19}})
//     .then((result) => {
//             return result
//         })
//         return response
//     }catch(error) {
//         console.log(error)
//     }
//     result.send('teste')
// })

