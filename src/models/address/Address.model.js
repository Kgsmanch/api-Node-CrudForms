const express = require('express');
const Address = require('../../models/address/Address.schema')

const getAll = async(payload) => {
    try {
        const response = await Address.findAll({
            order:[['id','DESC']],
            limit:100,
            attributes: ['UUIDV4', 'zip_code', 'street_name', 'complement', 'neighborhood', 'city', 'state', 'updatedAt', 'createdAt']
        })
        return response    
    } catch (error) {
        console.log(error)
    }
}
        
const getOne = async (request, result) => {
    try {
        const { id } = request.params;
        const response = await Address.findOne({
        where: {id:id},
        attributes: ['UUIDV4', 'zip_code', 'street_name', 'complement', 'neighborhood', 'city', 'state', 'updatedAt', 'createdAt']
    });
        return response
    } catch (error) {
        console.log(error)
    }
}    

const destroy = async (request) => {
    try {
    const data = request.params.id
    const response = await Address.destroy({where:{id:data}}).then((result) => {
        return result
    })
        return response
    } catch(error) {
        console.error(error);
    }
}

const create = async (request, result) => {
    try {
        const response = await Address.create(request).then((result) => {
            return result
        })
        return 
    } catch (error) {
        console.error(error);
    }
}   

const update = async (request, result) => {
    try {
        const{ id } = request.params;
        const { zip_code, street_name, complement, neighborhood, city, state } = request.body;
        const response = await Address.update({
            zip_code: zip_code,
            street_name: street_name,
            complement: complement,
            neighborhood: neighborhood,
            city: city,
            state: state
        },{
            where: {id:id}
    }).then((result) => {
        return result
    });
    return response
    } catch (error) {
       console.error(error); 
    }
}

module.exports={
    getAll,
    getOne,
    create,
    update,
    destroy
}