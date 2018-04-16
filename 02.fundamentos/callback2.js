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

let getEmpleado = (id, callback) => {

    let empleado = empleados.find(empleado => empleado.id === id);

    if(!empleado){
        callback(`No se ha encontrado empleado con id ${id}`);
    }
    else{
        callback(null,empleado);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No se encontraron salarios para el empleado nombre ${empleado.nombre} id: ${empleado.id}`);
    }
    else{
        let response = {
            nombre : empleado.nombre,
            salario : salarioDB.salario
        }
        callback(null,response);
    }

}

getEmpleado(1, (error, empleado) =>{

    if(error){
        console.log(error);
    }
    else{
        console.log(empleado);
    }
});

getSalario(empleados[0], (error, res) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(res);
    }
} )
