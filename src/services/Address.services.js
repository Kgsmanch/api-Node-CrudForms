const Address = require('../models/address/Address.model')

const getAll = async(payload) => {
    const response = await Address.getAll()
    return response
}

const getOne = async (payload) => {
    const response = await Address.getOne(payload).then((result) => {
    return result
    })
    return response
}

const destroy = async (request, result) => {
    const response = await Address.destroy(request).then((result) => {
        return result
    })
    return response
}

const create = async (request, result) => {
    const response = await Address.create(request).then((result) => {
        return result
    })
    return response
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




module.exports = {
    getAll,
    create,
    getOne,
    update,
    destroy
}

