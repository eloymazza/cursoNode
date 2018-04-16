//setTimeout(()=> console.log("hola mundo"),3000);

let getUsuarioByID = (id,callback) => {
    // Suposicion de que voy a la base de datos
    let usuario = {
        nombre: 'Fernando',
    //si el nombre es igual al contenido se puede poner asi:
        id  
    }
    if(id === 20){
        callback(`El usuario con id ${id} no existe en la base de datos`)
    }
    else{
        callback(undefined, usuario);
    }
}

getUsuarioByID(20, (err,usuario)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Usuario de base de datos", usuario); 
    }
});