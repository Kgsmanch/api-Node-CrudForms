
function formatResponse(result, response) {
if (response.error === null) {
    return result.status(response.code).send(response.error)
  } else {
    return result.status(response.code).send(response)
  }
}

function validateZipCode(payload) {
  const invalidZipCode = 'Error. Invalid Zip Code'
  let regex = /^[0-9]{8}$/;
  if(regex.test(payload) === true) {
    return true
  } else {
    return payload
  }
}

function validateStreetName(payload) {
  const invalidStreetName = 'Error. Invalid Street Name'
  if(typeof(payload)==='string' && payload.length >= 4 ) {
    return true
  } else {
    return payload
  }
}

function validateComplement(payload) {
  const invalidComplement = 'Error. Invalid Complement'
  if(typeof(payload)==='string' && payload.length >= 0 ) {
    return true
  } else {
    return payload
  }
}

function validateNeighborhood(payload) {
  const invalidNeighborhood = 'Error. Invalid Neighborhood'
  if(typeof(payload)==='string' && payload.length >= 4 ) {
    return true
  } else {
    return payload
  }
}

function validateCity(payload) {
  const invalidCity = 'Error. Invalid City'
  if(typeof(payload)==='string' && payload.length >= 3 ) {
    return true
  } else {
    return payload
  }
}

function validateState(payload) {
  const invalidState = 'Error. Invalid State'
  if(typeof(payload)==='string' && payload.length == 2 ) {
    return true
  } else {
    return payload
  }
}

module.exports={
  formatResponse,
  validateZipCode,
  validateStreetName,
  validateComplement,
  validateNeighborhood,
  validateCity,
  validateState
}
