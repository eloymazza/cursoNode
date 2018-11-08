const {argv} = require('./config/yargs');
const tasksManager = require('./to-do/to-do');

let comando = argv._[0];
let permitedFilters = ["all", "completed", "pending"];

switch ( comando ) {
    case 'create':
        let task = tasksManager.createTask(argv.description);
        console.log(task);
    break;
    case 'list':
        let filter = argv.filter;
        if(permitedFilters.indexOf(filter) != -1){
            let taskList = tasksManager.list(argv.filter);
            console.log('=========Task List==========');
            if(taskList.length != 0){
                for (let task of taskList){
                    console.log(task.description);
                    console.log (`Completada: ${task.completed}`);
                }
            }
            else{
                console.log('Task List is Empty');
            }
            console.log('============================');
        }
        else{
            console.log('Filtro inexistente'); 
        }
        
    break;
    case 'update':
        let taskUpdated = tasksManager.updateTask(argv.description, argv.completed);
        console.log('=========Task List==========');
        if(taskUpdated){
            console.log(`La tarea ${argv.description} ha sido completada`);
        }
        else{
            console.log(`La tarea no existe`);
        }
        console.log('============================');  
    break;
    case 'delete':
        let erased = tasksManager.deleteTask(argv.description);
        if(erased){
            console.log(`La tarea ${argv.description} se borro correctamente`);
        }
        else{
            console.log(`La tarea no existe`);
        }
    break;
    default:
        console.log("Comando Inexistente");
    break;
}