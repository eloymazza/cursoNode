let getNombre = async() => {
    return 'Eloy Mazza'
};

let saludo = async () => {
    undefined.nombre
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then( (mensaje) => {
    console.log(mensaje);
}).catch((err)=>{
    console.log(err);
});