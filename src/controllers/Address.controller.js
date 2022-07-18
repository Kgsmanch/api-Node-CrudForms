const Service = require('../services/Address.services');
const Helper = require('../helpers/address/helper.address.controller');
const Address = require('../models/address/Address.schema');

const getAll = async(request, result) => {
    const response = await Service.getAll(request).then((response) => {
        return response
    })
    response !== null ? 
    result.status(200).send(response): 
    result.status(204).send(response)
}

const getOne = async (request, result) => {
    const response = await Service.getOne(request).then((response) => {
        return response
    })
    response !== null ? 
    result.status(200).send(response): 
    result.status(204).send('Not found, please check for another id')
}

const destroy = async (request, result) => {
    const response = await Service.destroy(request).then((response) => {      
        return response 
    })
    response !== null ? 
    result.sendStatus(200): 
    result.status(204).send('Not found, please check for another id')
}

const create = async (request, result) => {
    const response = await Service.create(request.body).then((result) => {
        return result
    })
    response !== null ? 
    result.status(201).send('Created, Ok'): 
    result.status(204).send(response)
}

const update = async(request, result) => {
    const response = await Service.update(request).then((response) => {
        return response
    })
    response !== null ? 
    result.sendStatus(200): 
    result.status(204).send('Not found, please check for another id')
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
    validAddress.push(zipCode): invalidAddress.push("Invalid Zip Code");
    
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
        console.log(invalidAddress)
        result.status(406).json(invalidAddress)
    }
}

const validateId = async (request, result, next) => {
    const id = await request.params.id
    let validateId = await Helper.validateId(id)
    validateId === true ? isUnique(id): result.status(404).send('Invalid Id')
    
    async function isUnique(payload) {
        await Address.count({where:{id:id}})
        .then(count =>{
            if (count != 0) {
                return next()
            } else {
                result.status(404).send('Id not found')
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