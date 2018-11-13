const place = require('./place/place');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc : 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const APIKEY = '22c74b2b7c64c68278fb6f41b9204866';

let placeData = place.getPlaceLatLong(argv.direction)
    .then( resp => console.log(resp))
    .catch( e => console.log("Error found:",e));
    
place.getwheaterByPlace(placeData)