const express = require('express');
const Address = require('../../models/address/Address.schema')

const getAll = async(request, result) => {
    const response = await Address.findAll({
        order:[['id','DESC']],
        limit:30,
        attributes: ['zip_code', 'street_name', 'complement', 'neighborhood', 'city', 'state']
    })
    return response
    // incluir updated at e created at (envia tudo oculta somente o uuid fazer depois)
}
        
const getOne = async (request, result) => {
    const { id } = request.params;
    const response = await Address.findOne({
        where: {id:id},
        attributes: ['zip_code', 'street_name', 'complement', 'neighborhood', 'city', 'state']
    });
    return response
}

const destroy = async (request) => {
    const data = request.params.id
    const response = await Address.destroy({where:{id:data}}).then((result) => {
        return result
    })
    return response
}

const create = async (request, result) => {
    const response = await Address.create(request).then((result) => {
        return result
    })
    return 
}   

const update = async (request, result) => {
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
    })
    return response
    // validar apenas um campo caso necessario (sistema antigo) verificar ? opcional para cada campo
}

module.exports={
    getAll,
    getOne,
    create,
    update,
    destroy
}