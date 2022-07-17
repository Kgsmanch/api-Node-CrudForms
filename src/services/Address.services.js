const Address = require('../models/address/Address.model')

const getAll = async(payload) => {
    try {
        const response = await Address.getAll()
            .then((result) => {
            return result
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
//tratar a resposta => excluir dados inválidos

const getOne = async (payload) => {
    try{
        const response = await Address.getOne(payload).then((result) => {
            return result
        })
        return response
    }catch(error) {
        console.log(error)
    }
}

// const formatResponse = (response) => {
//     let formatedData = {}
//     if (response !== null) {
//         formatedData = {
//           data: response.dataValues,
//           code: 201,
//           error: null
//         }
//       } else {
//         formatedData = {
//           data: null,
//           code: 422,
//           error: 'Meu ovo'
//         }
//       }
    
//       return formatedData   
// }

const create = async (payload) => {
    try {
        const response = await Address.create(payload).then((response) => {
            return response
        });
        return response
    } catch (error) {
        console.log(error)
    }
}

const update = async(payload) => {
    try {
        const response = await Address.update(payload).then((result) => {
            return result
        })
        return response
    } catch(error) {
        console.log(error)
    }
}

const destroy = async (request, result) => {
    try {
        const response = await Address.destroy(request).then((result) => {
            return result
        })
        return response
    }catch(error) {
        console.log(error)
    }
}


module.exports = {
    getAll,
    create,
    getOne,
    update,
    destroy
}

