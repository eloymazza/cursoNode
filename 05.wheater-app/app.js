const axios = require('axios');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc : 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let encodedURL = encodeURI(argv.direction); 

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAb6Ed05c5cJo3mI9W8X4kBLiOE908JoZ4`)
    .then( resp => {
        let formattedAddress =  resp.data.results[0].formatted_address;
        let location = resp.data.results[0].geometry.location;
        let lat = location.lat;
        let long = location.lng;
        console.log(`
        Ciudad:  ${formattedAddress}
        Latitud: ${lat}
        Longitud ${long}`);
        
    })
    .catch( e => console.log('Error!!', e));