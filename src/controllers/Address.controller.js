const Service = require('../services/Address.services');

const getAll = async(payload) => {
    try {
        const response = await Service.getAll()
        return response
    } catch (error) {
        console.log(error)
    }
}

const getOne = async (payload) => {
    try {
        const response = await Service.getOne(payload).then((result) => {
            return result
        })
        return response
    }catch (error) {
        console.log(error)
    } 
}

const create = async (request) => {
    try {
        // const validate = Service.validate()
        const response = await Service.create(request.body).then((result) => {
            return result
        })

        return response
    } catch (error) {
        console.log(error)
        return false
    }
}

const update = async(request, result) => {
    try {
        const response = await Service.update(request).then((result) => {
            return result
        })
        return response
    } catch(error) {
        console.log(error)
    }
    result.send(response)
}

const destroy = async (request, result) => {
    try {
        const response = await Service.destroy(request).then((result) => {
            return result
        })
        return response
    }catch(error) {
        console.log(error)
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
}