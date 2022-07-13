


// const validationError = () => {
//     return 
// };

// const validateAddress = (request) => {
//     try {
        
//         request.body.zip_code? validateZipCode : validationError('zip_code', '')
//         request.body.street_name? validateStreetName : validationError

//         return validation
//     } catch(error) {
//         console.log(error)
//     }
// }


// const validateZipCode = (request) => {
//     const zipCode = request.body.zip_code;
//     const pattern = /\d{5}-\d{3}/;  
//     return pattern.test(zipCode)? zipCode : false 
// }

// const address = (request, result,next) => {
//     const address = request.body.address
//     function validAddress (address) {
//         if(typeof address === 'string') {
//             console.log('Ok Address é String')
//         } return validAddress
//     }
//     validAddress(address)
//     console.log(address)
//     next()
// }

// const complement = (request, result,next) => {
//     const complement = request.body.complement
//     function validComplement (complement) {
//         if(typeof complement === 'string') {
//             console.log('ok complement é string')
//         } 
//     }
//     validComplement(complement);
//     console.log(complement);
//     next()
// }

// const district = (request, result, next) => {
//     const district = request.body.district
//     function validDistrict(district) {
//         if(typeof district === 'string') {
//             console.log('ok district String')
//         }
//     }
//     validDistrict(district)
//     console.log(district)
//     next()
// }

// const city = (request, result, next) => {
//     const city = request.body.city
//     function validCity(city) {
//         if(typeof city === 'string') {
//             console.log('ok city é string')
//         }
//     }
//     validCity(city)
//     console.log(city)
//     next()
// }

// const state = (request, result, next) => {
//     const state = request.body.state
//     function validState(state) {
//         if(typeof state === 'string') {
//             console.log('state é string')
//         }
//     }
//     validState(state)
//     console.log(state)
//     next()
// }

// module.exports={zipCode, address, complement, district, city, state};
