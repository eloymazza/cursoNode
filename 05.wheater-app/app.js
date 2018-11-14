const place = require('./place/place');
const wheater = require('./wheater/wheater')
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc : 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getWheaterInfo = async (direction) => {

    try 
    {
        let placeData = await place.getPlaceLatLong(direction);
        let wheaterInfo = await wheater.getWheater(placeData);
        return  `La tempera tura de ${direction} es de ${wheaterInfo.data.main.temp} C°`;
    }
    catch(e){
        return `No se pudo determinar el clima ya que no existe la ciudad ${direction}`;
    }

}

getWheaterInfo(argv.direction)
    .then(r => console.log(r))
    .catch(e => console.log(e))
 


  
/*
    .then(resp => resp)
    .catch( e => {
        throw new Error(`Error found on get Direction: ${e}`)
    });
    
    let wheaterInfo = await wheater.getWheater(placeData)
    .then(resp => resp.data)
    .catch(e => console.log("Error found on get Wheater", e))

 */