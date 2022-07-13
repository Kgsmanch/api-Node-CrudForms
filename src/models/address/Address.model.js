const express = require('express');
const Address = require('../../models/address/Address.schema')

const getAll = async(payload) => {
    try {
        const response = await Address.findAll(payload).then((result)=> {
        return result
        })
        return response
    }catch(error) {
        console.log(error)
    }
}

//GetOne
const getOne = async (request, result) => {
    try {
        const { id } = request.params;
        const findOne = await Address.findByPk(id);
        if (!findOne) {
            result.status(200).send({
                status:'error',
                message:`${id}, não encontrado`
            });
        }
        // result.send(findOne);
        return findOne
    } catch(error) {
        console.log(error)
    }
}  
// Create
const create = async(payload) => {

    try {
        const response = await Address.create(payload).then((result) => {
            return result
        })
        const responseValues = {
            "zip_code": response.zip_code
        }
        return responseValues
    } catch(error) {
        console.log(error)
        return false
    } 
}

// Update
const update = async(request, result) => {
try{
    const{ id } = request.params;
    const { zip_code, street_name, complement, neighborhood, city, state } = request.body;
    const findById = await Address.findOne({
        where: {
            id
        }
    });
    if (!findById) result.send('Dados incorretos');
    if (zip_code) findById.zip_code = zip_code
    if (street_name) findById.street_name = street_name
    if (complement) findById.complement = complement
    if (neighborhood) findById.neighborhood = neighborhood
    if (city) findById.city = city
    if (state) findById.state = state
    const updateAdress = await findById.save();
    if (!updateAdress) {
        result.send( `os dados com id ${id} falharam`);
    }
    return updateAdress
     
    }catch(error){
        console.log(error)
    }
}

//Delete
const destroy = async(request) => {
    const data = request.body
    try{
        const response = await Address.destroy({where:{id:data.id}}).then((result) => {
            return result
        })
        return response
    }catch(error) {
        console.log(error)
    }
}


module.exports={
    getAll,
    getOne,
    create,
    update,
    destroy
}