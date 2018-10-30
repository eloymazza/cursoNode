const {argv} = require('./config/yargs');
console.log(argv);

let comando = argv._[0];

switch ( comando ) {

    case 'create':
    console.log("crear Tarea");
    break;
    case 'list':
    console.log("listar Tarea");
    break;
    case 'update':
    console.log("crear Tarea");
    break;
    default:
    console.log("Comando Inexistente");
    break;
}