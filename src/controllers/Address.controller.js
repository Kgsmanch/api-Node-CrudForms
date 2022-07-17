const Service = require('../services/Address.services');
const Helper = require('../helpers/helper.controller')

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
        let response = await Service.getOne(payload).then((result) => {
            return result
        })
        return response
    }catch (error) {
        console.log(error)
    } 
}

const create = async (request, result) => {
    try {
        const response = Service.create(request.body).then((result) => {
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



const teste = async (request, result, next) => {
    let numero = request.params.num
    if(numero=== '1'){
        result.status(201).send('OK é um')
    }else{
        next()
    }
}
module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy,
    validateEntry,
    teste
}