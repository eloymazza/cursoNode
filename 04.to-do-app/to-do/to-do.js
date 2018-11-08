const fs = require('fs');

let taskList = [];

const saveTask = () => {

    let data = JSON.stringify(taskList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
        else console.log('Tareas Actualizadas Correctamente');
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

const updateTask = (description, completed = true) => {

    loadTasks();

    let index = taskList.findIndex( task => description === task.description)

    if(index > -1){
        taskList[index].completed = completed;
        saveTask();
        return true;
    }
    else {
        return false;
    }

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

const deleteTask = (description) => {

    loadTasks();
    let fTaskList = taskList.filter( task => description !== task.description);
    
    if(fTaskList.length != taskList.length){
        taskList = fTaskList;
        saveTask();
        return true;
    }
    else{
        return false;
    }
}

const list = (filter) => {
    loadTasks();

    if(filter == 'all'){
        return taskList;
    }
    if(filter == 'completed'){
        return taskList.filter( task => task.completed == true)
    }
    if(filter == 'pending'){
        return taskList.filter( task => task.completed == false)
    }
    
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    list
}