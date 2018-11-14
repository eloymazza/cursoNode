const axios = require('axios');

const getPlaceLatLong = async (direction) => {
    
    let encodedURL = encodeURI(direction); 
  
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAb6Ed05c5cJo3mI9W8X4kBLiOE908JoZ4`)
    
    if( resp.data.status === 'ZERO_RESULTS' ) {
        throw new Error(`No hay resultados para la ciudad ${direction}`)
    } 
    
    let location = resp.data.results[0].geometry.location;

    return {
        direction : resp.data.results[0].formatted_address,
        lat: location.lat,
        long : location.lng
    }
}



module.exports = {
    getPlaceLatLong,
}

