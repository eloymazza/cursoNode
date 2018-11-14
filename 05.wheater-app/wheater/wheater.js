const axios = require('axios');
const APIKEY = '22c74b2b7c64c68278fb6f41b9204866';

const getWheater = async (placeData) => {

    let req = `https://api.openweathermap.org/data/2.5/weather?lat=${placeData.lat}&lon=${placeData.long}&units=metric&APPID=${APIKEY}`;
    return await axios.get(req);
    
}

module.exports = {
    getWheater
}