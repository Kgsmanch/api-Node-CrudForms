const Address = require('../models/address/Address.model')

const getAll = async(payload) => {
    try {
        const response = await Address.getAll(
            {order:[['id','DESC']],limit:30}
            )
            .then((result) => {
            return result
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
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

const create = async (payload) => {
    try {
        const created = await Address.create(payload).then((response) => {
            return response
        });

        return created
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

