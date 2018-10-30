const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;

let comando = argv._[0];


switch ( comando ) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then((lista) => console.log('Lista:', lista))
        .catch(err => console.log(err));
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then((archivo) => console.log('Archivo creado:', archivo))
        .catch(err => console.log(err));
    break;
    default:
        console.log('Comando no reconocido');
    break;
}




