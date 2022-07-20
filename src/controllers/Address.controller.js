const Service = require('../services/Address.services');
const Helper = require('../helpers/address/helper.address.controller');
const Address = require('../models/address/Address.schema');

const getAll = async(request, result) => {
    const response = await Service.getAll(request).then((response) => {
        return response
    })
    if (response !== null) {
        result.status(200).json(response) 
    } else {
        result.json('[]')
    }
}

const getOne = async (request, result) => {
    const response = await Service.getOne(request).then((response) => {
        return response
    })
    response !== null ? 
    result.status(200).json(response): 
    result.sendStatus(404)
}

const destroy = async (request, result) => {
    const response = await Service.destroy(request).then((response) => {      
        return response 
    })
    if(response !== null) { 
    result.sendStatus(200)
    } else {
        result.end
    } 
}

const create = async (request, result) => {
    const response = await Service.create(request.body).then((result) => {
        return result
    })
    if(response !== null) {
        const data = request.body
        result.status(201).json(data)
    } else {
        result.end
    }
}

const update = async(request, result) => {
    const response = await Service.update(request).then((response) => {
        return response
    })
    const data = request.body
    response !== null ? 
    result.status(200).json(data): 
    result.sendStatus(404) 
}

// ENTRY VALIDATIONS
const validateEntry = async (request, result, next) => {
    let zipCode = request.body.zip_code
    let streetName = request.body.street_name
    let complement = request.body.complement
    let neighborhood = request.body.neighborhood
    let city = request.body.city
    let state = request.body.state
    let validAddress = []
    let invalidAddress = []

    let ValidZipCode = await Helper.validateZipCode(zipCode) === true ? 
    validAddress.push(zipCode): invalidAddress.push("Invalid zip_code");
    
    let validStreetName = await Helper.validateStreetName(streetName) === true ?
    validAddress.push(streetName): invalidAddress.push("Invalid street_name");   
    
    let validcomplement = await Helper.validateComplement(complement) === true ?
    validAddress.push(complement): invalidAddress.push("Invalid Complement");
    
    let validateNeighborhood = await Helper.validateNeighborhood(neighborhood) === true ?
    validAddress.push(neighborhood):invalidAddress.push("Invalid neighborhood");
    
    let validateCity = await Helper.validateCity(city) === true ?
    validAddress.push(city): invalidAddress.push("Invalid City");
    
    let validateState = await Helper.validateState(state) === true ?
    validAddress.push(state): invalidAddress.push("Invalid State");
    
    if (invalidAddress < 1) {
        next()
    } else {
        result.status(422).json(invalidAddress)
    }
}

const validateId = async (request, result, next) => {
    const id = await request.params.id
    let validateId = await Helper.validateId(id)
    validateId === true ? isUnique(id): result.sendStatus(404)
    
    async function isUnique(payload) {
        await Address.count({where:{id:id}})
        .then(count =>{
            if (count != 0) {
                return next()
            } else {
                result.sendStatus(404)
            }
        })
    } 
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy,
    validateEntry,
    validateId
}