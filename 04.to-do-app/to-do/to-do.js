const fs = require('fs');

let taskList = [];

const saveTask = () => {

    let data = JSON.stringify(taskList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
        else console.log('Tarea Grabada Correctamente');
        
    });

}

const loadTasks = () => {

    try {  
        taskList = require('../db/data.json');    
    } 
    catch(error) {
        taskList = [];
    }
    
    return taskList;
}

const createTask = (description) => {

    loadTasks();

    let task = {
        description,
        completed : false
    }

    taskList.push(task);
    saveTask();
    return task;
}

const list = () => {
    loadTasks();
    return taskList;
}

module.exports = {
    createTask,
    list
}