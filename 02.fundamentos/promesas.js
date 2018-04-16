let empleados = [{
    id:1,
    nombre:"Fernando"
},
{
    id:2,
    nombre:"Eloy"
},
{
    id:3,
    nombre:"Agustina"
}
];

let salarios = [{
    id: 1,
    salario:1000
},
{
    id:2,
    salario:2000
}
];

let getEmpleado = (id) => {

    return new Promise((resolve,reject) => {

        let empleado = empleados.find(empleado => empleado.id === id);

        if(!empleado){
            reject(`No se ha encontrado empleado con id ${id}`);
        }
        else{
            resolve(empleado);
        }

    });

}

let getSalario = (empleado) => {
    
    return new Promise((resolve,reject)=>{

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No hay un salario relacionado a empleado n°${empleado.id}`)
        }
        else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })

}

getEmpleado(1).then( (empleado) =>{
    console.log('Empleado obtenido:',empleado);
}, (err) => {
    console.log(err);
})

getSalario(empleados[2]).then( (response)=>{
    console.log(`El salario del empleado ${response.nombre} es de ${response.salario}` )
},(err) => {
    console.log(err);
});