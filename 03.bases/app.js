const mult = require('./multiplicar/multiplicar.js');
const argv = require('yargs')
            .command('listar', 'Escribe en consola la tabla de multiplicar', {
                base:{
                    demand : true,
                    alias: 'b'
                },
                limite : {
                    alias: 'l',
                    default: 10
                }
            })
            .argv; 


mult.crearArchivo(argv.base, argv.limite)
.then((archivo) => console.log('Archivo creado:', archivo))
.catch(err => console.log(err));


