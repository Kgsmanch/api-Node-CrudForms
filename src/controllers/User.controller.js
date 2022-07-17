const Services = require('../services/User.services')

const create = async (request) =>{ 
    const response = await request.body
    .then((result)=> {
        return result
    })
    result.send(response)
    }
    

module.exports={
    create
}



// const create = async (request) => {
//     try {
//         // const validate = Service.validate()
//         const response = await Service.create(request.body).then((result) => {
//             return result
//         })

//         return response
//     } catch (error) {
//         console.log(error)
//         return false
//     }
// }
