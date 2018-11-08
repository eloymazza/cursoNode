const {argv} = require('./config/yargs');
const tasksManager = require('./to-do/to-do');

let comando = argv._[0];

switch ( comando ) {
    case 'create':
        let task = tasksManager.createTask(argv.description);
        console.log(task);
    break;
    case 'list':
        let taskList = tasksManager.list();
        console.log(taskList);
        console.log('=========Task List==========');
        if(taskList.length != 0){
            for (let task of taskList){
                console.log(task.description);
                console.log (`Completada: ${task.completed}`);
            }
            console.log('============================');
        }
        else{
            console.log('Task List is Empty');
            console.log('============================');    
        }
    break;
    case 'update':
    console.log("crear Tarea");
    break;
    default:
    console.log("Comando Inexistente");
    break;
}