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
const getOne = async (request) => {
    const data = request.body
  try {
    const response = await Address.findOne({where:{id:data.id}}).then((result) => {
        return result
    })
    return response
  }catch(error){
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
const update = async(payload) => {
    try{
        const response = await Address.update(payload).then((result) => {
            return result
        })
    }catch(error) {
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