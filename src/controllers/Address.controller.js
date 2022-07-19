const Service = require('../services/Address.services');
const Helper = require('../helpers/address/helper.address.controller');
const Address = require('../models/address/Address.schema');

const getAll = async(request, result) => {
    const response = await Service.getAll(request).then((response) => {
        return response
    })
    response !== null ? 
    result.status(200).send(response): 
    result.status(404).send(response)
}
// 404 nao utilizado em get all outraz ou nao rs

const getOne = async (request, result) => {
    const response = await Service.getOne(request).then((response) => {
        return response
    })
    response !== null ? 
    result.status(200).send(response): 
    result.status(404).send('Not found, please check for another id')
}

const destroy = async (request, result) => {
    const response = await Service.destroy(request).then((response) => {      
        return response 
    })
    response !== null ? 
    result.sendStatus(204): 
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
// nunca devolve status 204 em criate.

const update = async(request, result) => {
    const response = await Service.update(request).then((response) => {
        return response
    })
    response !== null ? 
    result.sendStatus(200): 
    result.status(204).send('Not found, please check for another id')
    // caso nao encontre 404 
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
    // usar 422 no lugar de 406
}

const validateId = async (request, result, next) => {
    const id = await request.params.id
    let validateId = await Helper.validateId(id)
    validateId === true ? isUnique(id): result.status(404).send('Item not Found')
    
    async function isUnique(payload) {
        await Address.count({where:{id:id}})
        .then(count =>{
            if (count != 0) {
                return next()
            } else {
                result.status(404).send('Item not found')
            }
        })
    } 
}


const validTeste = (request, next) => {
    const body = request.body
    console.log(`validteste ${body}`)
    next()
}

const teste = (request, next) => {
    const urlParams = request.params
    console.log(`teste ${urlParams}`)
    next()    
}

const ultima = (result) => {
    result.send('ok')
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy,
    validateEntry,
    validateId,
    validTeste,
    teste,
    ultima
}