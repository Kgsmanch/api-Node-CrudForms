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

const update = async(payload) => {
    try {
        const response = await Address.update(payload).then((result) => {
            return result
        })
    } catch(error) {
        console.log(error)
    }
}

const destroy = async(payload) => {
    try {
        const result = await Address.destroy(payload).then((result) => {
            return result
        })
    } catch(error) {
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