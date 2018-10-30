const commonOptions = {
    base:{
        demand : true,
        alias: 'b'
    },
    limite : {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', 'Escribe en consola la tabla de multiplicar', commonOptions)
            .command('crear', 'Crea un archivo con la tabla de multiplicar indicada', commonOptions)
            .help()
            .argv; 

            
module.exports = {
    argv
}