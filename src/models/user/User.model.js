const User = require('./User.schema')

const getAll = async (result) => {
    const response = await User.findAll().then((response) => {
        return response
    })
    if (!response) {
        console.log('MODEL. NOT RESPONSE FROM SCHEMA')
    } else {
        result.send(response)
    }
}

module.exports={
    getAll
}
