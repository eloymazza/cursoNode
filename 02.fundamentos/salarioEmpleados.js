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


let getEmpleado = async (id) => {

    let empleado = empleados.find(empleado => empleado.id === id);
    if(!empleado){
        throw new Error(`No se ha encontrado empleado con id ${id}`);
    }
    else{
        return empleado;
    }

}

let getSalario = async (empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if(!salarioDB){
        throw new Error(`No hay un salario relacionado a empleado ${empleado.nombre}`);
    }
    else{
        return({
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

let getInfo = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    
    return `${resp.nombre} tiene un salario de ${ resp.salario }$`  
}

getInfo(1).then((message)=>{
    console.log(message);
}).catch((err) => {
    console.log(err);
    
});